import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const registerUrl = 'http://localhost:3000/article/register'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {


  name: string = '';
  description: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    if (!!this.cookieService.get('userId')) this.router.navigate(['/article'])
  }

  register(data:any) : Observable<User> {
    return this.http.post(registerUrl, data)
  }

  onSubmit() : void {
    const data = {
      name:this.name,
      description:this.description,
      email:this.email,
      password:this.password,
    }

    this.register(data).subscribe({
      next: (res) => {
        this.cookieService.set('userId', res.id)
        this.cookieService.set('name', res.name!)
        this.cookieService.set('desc', res.description!)
        this.cookieService.set('email', res.email!)
        this.router.navigate(['/article'])
      },
      error: (e) => console.error(e)
    })

  }

}
