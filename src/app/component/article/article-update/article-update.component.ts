import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Article } from '../../../models/article.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

const articleUrl = 'http://localhost:3000/article'

@Component({
  selector: 'app-article-update',
  standalone: true,
  imports: [CommonModule, NavigationComponent, HttpClientModule],
  templateUrl: './article-update.component.html',
  styleUrl: './article-update.component.css'
})

export class ArticleUpdateComponent {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}

  article : Article = {}
  isCreator : boolean = false

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getArticleById(id).subscribe({
      next: res => {
        this.article = res
        if(this.cookieService.get('userId') == res.userId) this.isCreator = true
      }
    })
  }

  getArticleById(id:number) : Observable<Article> {
    return this.http.get(`${articleUrl}/${id}`)
  }

  deleteArticleById(id:number) {
    return this.http.delete(`${articleUrl}/${id}`)
  }

  goBack() : void {
    this.router.navigate(['/article'])
  }

  updateArticle() :void {
    this.router.navigate(['/article/update', this.article.id])
  }

  deleteArticle() :void {
    this.deleteArticleById(this.article.id).subscribe({
      next:res=>{
        this.router.navigate(['/article'])
      }
    })
  }
}
