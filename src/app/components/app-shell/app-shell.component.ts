import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo/seo.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { menuItems as menuList } from './sidenav-items';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  menuItems = menuList;

  mobileQuery = this.media.matchMedia('(max-width: 600px)');
  title = '';
  constructor(
    private media: MediaMatcher,
    private auth: AuthService,
    // private dialog: MatDialog,
    private seo: SeoService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['books']);
    }
  }

 

}
