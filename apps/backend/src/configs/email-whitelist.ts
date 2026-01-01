/**
 * Email Whitelist Configuration
 * Only emails in this list can register or login to the system
 * Add authorized emails here
 */
export const EMAIL_WHITELIST: string[] = [
  "admin@test.com",
  "rodrygoleu7@gmail.com"
  // Add more authorized emails here
];

/**
 * Check if an email is in the whitelist
 */
export function isEmailWhitelisted(email: string): boolean {
  return EMAIL_WHITELIST.includes(email.toLowerCase());
}
