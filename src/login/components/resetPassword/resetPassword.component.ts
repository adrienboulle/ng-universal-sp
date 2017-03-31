import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { FormService } from '../../../shared/services/formStatic.service';

@Component({
  providers: [FormService],
  selector: 'reset-password',
  templateUrl: './resetPassword.html',
})

export class ResetPasswordComponent implements OnInit {
  private myForm: FormGroup;
  public showForm: boolean;
  public isEmailValid: boolean;

  private _showError: boolean;

  constructor(private _formService: FormService, private _loginService: LoginService) {
    this.isEmailValid = false;
    this._showError = false;
    this.showForm = true;
  }

  public ngOnInit(): void {
    this._buildForm();
  }

  public onSubmit(): void {
    this._loginService.requestResetPassword(this.myForm.value)
    .then(() => {
      this.isEmailValid = true;
      this._showError = false;
    })
    .catch(() => {
      this._showError = true;
      this.showForm = false;
      setTimeout(() => {
        this._buildForm();
        this.showForm = true;
      });
    });
  };

  private _buildForm(): void {
    this.myForm = this._formService.formGroup(['email']);
  }

  private _removeShowError(): void {
    this._showError = this._formService.removeShowError(this.myForm.value.email);
  }
}
