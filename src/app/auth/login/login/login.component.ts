import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Toast } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordHide = true;
  invalidDetails = ''
  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private authServe: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }


  async login(): Promise<void> {
    try {
      this.loader.show();
      const data = await this.authServe.login(this.loginForm.value);
      console.log(data);
      this.invalidDetails = '';
    } catch (error: any) {
      console.log(error);
      this.invalidDetails = error?.error.message
    } finally {
      this.loader.hide();
    }
  }

  ngOnInit(): void { }
}
