import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RouterHelper } from '../../../shared/helpers/router.helper';

import { LoginService } from '../../services/login.service';
import { FormService } from '../../../shared/services/formStatic.service';

declare let window: any;

@Component({
  providers: [FormService],
  selector: 'login',
  templateUrl: './login.html',
})

export class LoginComponent implements OnInit {
  public isEmailValid: boolean;
  public myForm: FormGroup;
  public showForm: boolean;

  private _showError: boolean;
  private _routerHelper: any;

  constructor(private _formService: FormService, private _loginService: LoginService) {
    this.isEmailValid = false;
    this._showError = false;
    this.showForm = true;
    this._routerHelper = RouterHelper;
  }

  public ngOnInit(): void {
    this._buildForm();
  }

  public signIn(e: Event): void {
    e.preventDefault();

    let data = this.myForm.value;
    data.isMobile = window.isMobile;

    this._loginService.login(data)
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
  }

  private _buildForm(): void {
    this.myForm = this._formService.formGroup(['email', 'password'], true);
  }

  private _removeShowError(): void {
    this._showError = this._formService.removeShowError(this.myForm.value.email);
  }
}
