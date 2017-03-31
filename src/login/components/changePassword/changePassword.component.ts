import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { FormService } from '../../../shared/services/formStatic.service';

import { PasswordHelper } from '../../../shared/helpers/password.helper';

@Component({
  providers: [FormService],
  selector: 'change-password',
  templateUrl: './changePassword.html',
})

export class ChangePasswordComponent implements OnInit {
  public passwordStrength: any = PasswordHelper.PasswordStrength;
  public myForm: FormGroup;
  public showForm: boolean;
  public isChangeSuccessful: boolean;

  private _strength: PasswordHelper.PasswordStrength;
  private _passwordHelper: any;

  private _token: string;
  private _password: string;
  private _confirmedPassword: string;
  private _showError: boolean;
  private _isFormCorrect: boolean;

  constructor(private _route: ActivatedRoute, private _formService: FormService, private _loginService: LoginService) {
    this._passwordHelper = PasswordHelper;

    this._password = '';
    this._confirmedPassword = '';
    this.isChangeSuccessful = false;
    this._isFormCorrect = false;
    this._showError = false;
    this.showForm = true;
  }

  public ngOnInit(): void {
    this._token = this._route.snapshot.params['token'];
    this._buildForm();
  }

  public evaluateStrength(password: string): void {
    this._strength = PasswordHelper.getPasswordStrength(password);

    if (this._showError)
      this._removeShowError();
  }

  public onSubmit(): void {
    let formData = {
      password: this.myForm.value.password,
      token: this._token,
    };

    this._loginService.requestChangePassword(formData)
    .then(() => {
      this.isChangeSuccessful = true;
    })
    .catch(e => {
      this._showError = true;
      this.showForm = false;
      setTimeout(() => {
        this._buildForm();
        this.showForm = true;
      });
    });
  };

  private _buildForm(): void {
    this._password = '';
    this._confirmedPassword = '';
    this.myForm = this._formService.formGroup(['password', 'confirmed_password']);
  }

  private _checkConfirmedPassword(): void {
    this._isFormCorrect = this._formService.checkConfirmedPassword(this._password, this._confirmedPassword);
  }

  private _removeShowError(): void {
    this._showError = this._formService.removeShowError(this.myForm.value.password);
  }
}
