import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private Auth: AuthService,
    private Router: Router
  ) {}

  formBody: FormGroup = this.FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });
  handleForm() {
    if (this.formBody.status === 'VALID') {
      this.Auth.login(this.formBody.value).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwt);
          this.Router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.formBody.markAllAsTouched();
    }
  }
}
