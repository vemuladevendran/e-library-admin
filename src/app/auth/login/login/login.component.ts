import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Toast } from 'ngx-toastr';
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
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  async login(): Promise<void> {
    try {
      console.log(this.loginForm.value);
    } catch (error) {
      console.log(error);
    } finally {
      this.loader.hide();
    }
  }

  ngOnInit(): void { }
}
