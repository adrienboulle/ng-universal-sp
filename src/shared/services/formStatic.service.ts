import {Injectable} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {PasswordHelper} from '../helpers/password.helper';

@Injectable()
export class FormService {
  constructor (private _formBuilder: FormBuilder) {}

  public formGroup(formElements: string[], rawPassword: boolean = false): any {
    const formStructure: any = {
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(PasswordHelper.MIN_CHARS), Validators.maxLength(PasswordHelper.MAX_CHARS)])],
      rawPassword: ['', Validators.compose([Validators.required])],
      confirmed_password: ['', Validators.compose([Validators.required])],
    };

    let form: any = {};

    for (let i = 0; i < formElements.length; i++) {
      if (rawPassword === true && formElements[i] === 'password') {
        form[formElements[i]] = formStructure['rawPassword'];
      } else {
        form[formElements[i]] = formStructure[formElements[i]];
      }
    }

    form = this._formBuilder.group(form);

    return form;
  };

  public checkConfirmedPassword(password: string, confirmedPassword: string): boolean {
    return confirmedPassword === password && password.length >= PasswordHelper.MIN_CHARS && password && password.length <= PasswordHelper.MAX_CHARS;
  }

  public removeShowError(email: string): boolean {
    return !(email.length > 0);
  }
}
