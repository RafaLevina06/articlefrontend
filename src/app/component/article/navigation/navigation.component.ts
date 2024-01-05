import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

const userUrl = 'http://localhost:3000/article/user'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private router:Router, private cookieService: CookieService) {}

  currName : string = ''

  ngOnInit(): void {
    if (this.cookieService.get('userId') === null) this.router.navigate(['/login'])
    else this.currName = this.cookieService.get('name')
  }

  handleLogout() : void {
    this.cookieService.delete('userId')
    this.cookieService.delete('name')
    this.cookieService.delete('desc')
    this.cookieService.delete('email')
    this.router.navigate(['/login'])
  }

}
