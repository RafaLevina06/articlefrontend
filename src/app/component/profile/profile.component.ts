import { Component } from '@angular/core';
import { NavigationComponent } from '../article/navigation/navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

const userUrl = 'http://localhost:3000/article/user'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NavigationComponent,
    HttpClientModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router:Router, private cookieService: CookieService) {}

  name : string = ''
  description : string = ''
  email : string = ''

  ngOnInit(): void {
    if (this.cookieService.get('userId') === null) this.router.navigate(['/login'])
    else {
      this.name = this.cookieService.get('name')
      this.description = this.cookieService.get('desc')
      this.email = this.cookieService.get('email')
    }
  }

}
