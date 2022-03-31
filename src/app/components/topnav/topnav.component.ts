import { Component, OnInit, Input } from '@angular/core';
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
  @Input() userName = '';
  constructor(
  ) {
    setInterval(() => {
      this.timeDate = new Date();
    }, 1);
  }

  ngOnInit() {
  }


  toggleSideNav() {
    this.snav?.toggle();
  }

  showLoginIcon() {
  }

  logout() {
    console.log('Clicked On Logout');
  }

}
