import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Email Whitelist Service
 * Only emails in this list can register or login to the system
 */
@Injectable()
export class EmailWhitelistService {
  private readonly emailWhitelist: string[];

  constructor(private configService: ConfigService) {
    const emailWhitelistStr = this.configService.get<string>('EMAIL_WHITELIST', '');
    this.emailWhitelist = emailWhitelistStr
      ? emailWhitelistStr.split(',').map(email => email.trim().toLowerCase())
      : [];

  }

  /**
   * Check if an email is in the whitelist
   */
  isEmailWhitelisted(email: string): boolean {
    const normalizedEmail = email.toLowerCase();
    return this.emailWhitelist.includes(normalizedEmail);
  }
}
