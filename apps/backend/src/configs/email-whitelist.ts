import configuration from '@/configs/configuration';
/**
 * Email Whitelist Configuration
 * Only emails in this list can register or login to the system
 * Add authorized emails here
 */
const config = configuration()
export const EMAIL_WHITELIST: string[] = config.auth.emailWhitelist;

/**
 * Check if an email is in the whitelist
 */
export function isEmailWhitelisted(email: string): boolean {
  return EMAIL_WHITELIST.includes(email.toLowerCase());
}
