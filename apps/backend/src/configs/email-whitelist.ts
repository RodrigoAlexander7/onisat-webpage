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
    // Usamos el valor ya procesado por configuration.ts
    // Esto retorna un string[] directamente
    this.emailWhitelist = this.configService.get<string[]>('auth.emailWhitelist', []);
  }

  /**
   * Check if an email is in the whitelist
   */
  isEmailWhitelisted(email: string): boolean {
    const normalizedEmail = email.toLowerCase();
    return this.emailWhitelist.includes(normalizedEmail);
  }
}
