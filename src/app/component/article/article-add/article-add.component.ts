import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from '../../../models/article.model';
import { CookieService } from 'ngx-cookie-service';

const articleUrl = 'http://localhost:3000/article'

@Component({
  selector: 'app-article-add',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './article-add.component.html',
  styleUrl: './article-add.component.css'
})

export class ArticleAddComponent {

  name: String = ''
  content: String = ''

  constructor(private http:HttpClient, private router:Router, private cookieService: CookieService) {}

  onSubmit() : void {
    if(this.name === '' || this.content === '') return
    const userId = parseInt(this.cookieService.get('userId')!)
    const data = {
      userId:userId,
      name:this.name,
      content:this.content
    }
    this.articleAdd(data).subscribe({
      next:res=>{
        console.log(res)
        this.router.navigate(['/article'])
      }
    })
  }

  articleAdd(data:any) : Observable<Article> {
    return this.http.post(articleUrl,data)
  }

}
