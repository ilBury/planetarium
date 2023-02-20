import { Component,  Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ValidationService } from 'src/app/shared/services/validation.service';
import { RoleUsers } from 'src/app/shared/types/role-users.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public showPaswword: boolean = false;
  public form = this.fb.group( {
    login: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(19),
      ValidationService.loginValidator()
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      ValidationService.passwordValidator()
    ])
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.showPaswword = !this.showPaswword;
  }

  async login(): Promise<void> {

    if(this.form.valid) {

      await this.authService.login(this.form.value.login!, this.form.value.password!)
      .then(()=> {
        this.router.navigate(['planetarium']);

        this.authService.changeRoles();
      })
      .catch(()=> {
        this.openSnackBar();
      });

    }
  }

  private openSnackBar() {
    this._snackBar.open('Invalid login or password', '', {
      horizontalPosition:'center',
      verticalPosition: 'top',
      duration: 3*1000
    });
  }

  registration(): void {
    this.router.navigate(['registration']);
  }

}
