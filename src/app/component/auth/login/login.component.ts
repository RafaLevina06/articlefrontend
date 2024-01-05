import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const loginUrl = 'http://localhost:3000/article/login'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http : HttpClient, private router: Router, private cookieService: CookieService) {}

  email: string = '';
  password: string = '';

  ngOnInit(): void {
    if (!!this.cookieService.get('userId')) this.router.navigate(['/article'])
  }

  login(data:any) : Observable<User> {
    return this.http.post(loginUrl, data)
  }

  onSubmit() : void {
    const data = {
      email: this.email,
      password: this.password
    }

    this.login(data).subscribe({
      next:(res) => {
        this.cookieService.set('userId', res.id)
        this.cookieService.set('name', res.name!)
        this.cookieService.set('desc', res.description!)
        this.cookieService.set('email', res.email!)
        this.router.navigate(['/article'])
      },
      error: e =>console.error(e)
    })
  }

}
