export namespace PasswordHelper {
  'use strict';

  export enum PasswordStrength {
    None,
    Weak,
    Medium,
    Strong,
  }
  
  export const MIN_CHARS: number = 6;
  export const MAX_CHARS: number = 30;

  export function isValid(password: string): boolean {
    return (/[a-z]/.test(password)) &&
      (/[A-Z]/.test(password)) &&
      (/[0-9]/.test(password)) &&
      password.length >= MIN_CHARS &&
      password.length <= MAX_CHARS;
  }

  export function getPasswordStrength(password: string): PasswordStrength {
    let charTypes: number = 0;
    charTypes += (/[a-z]/.test(password)) ? 1 : 0;
    charTypes += (/[A-Z]/.test(password)) ? 1 : 0;
    charTypes += (/[0-9]/.test(password)) ? 1 : 0;

    const strength: number = password.length * charTypes;

    if (strength === 0)
      return PasswordStrength.None;
    else if (strength <= 18)
      return PasswordStrength.Weak;
    else if (strength > 18 && strength <= 35)
      return PasswordStrength.Medium;
    else if (strength > 35)
      return PasswordStrength.Strong;
  }
}
