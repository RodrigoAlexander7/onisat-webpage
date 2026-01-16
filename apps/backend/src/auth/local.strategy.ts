import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { User } from "@generated/prisma/client";
import { EmailWhitelistService } from "@/configs/email-whitelist";

/**
 * LocalStrategy validates user credentials for local authentication
 * Uses passport-local strategy with email as username field
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
  constructor(
    private readonly authService: AuthService,
    private readonly emailWhitelistService: EmailWhitelistService,
  ) {
    super({
      usernameField: "email", // Use email instead of default 'username' field
      passwordField: "password",
    });
  }

  /**
   * Validates user credentials
   * Called automatically by Passport when using @UseGuards(AuthGuard('local'))
   * The returned user object will be attached to req.user
   */
  async validate(email: string, password: string): Promise<User> {
    // Check if email is whitelisted before validating credentials
    if (!this.emailWhitelistService.isEmailWhitelisted(email)) {
      throw new ForbiddenException(
        "Email not authorized. Please contact an administrator.",
      );
    }

    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }
}
