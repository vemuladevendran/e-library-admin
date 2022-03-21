import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  isLoggedIn = true;
  @Input() snav: any;
  title = '';
  timeDate = new Date();
  userName = ''
  constructor(
    private auth: AuthService,
    private tokenServe: TokenService,
    private loaderService: LoaderService
  ) {
    setInterval(() => {
      this.timeDate = new Date();
    }, 1);
  }

  async ngOnInit(): Promise<void> {
    await this.getUserDetails();
    this.getUserName();
  }

  getUserName(): any {
    this.userName = this.tokenServe.getUserName();
  }

  async getUserDetails(): Promise<void> {
    try {
      this.loaderService.show();
      const data = await this.auth.getUserDetails();
      this.tokenServe.setUserName(data.user.username);
    } catch (error) {
      console.log(error);
    } finally {
      this.loaderService.hide();
    }
  }

  toggleSideNav() {
    this.snav?.toggle();
  }

  showLoginIcon() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    console.log('Clicked On Logout');
  }

}
