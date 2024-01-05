import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../models/article.model';
import { Observable } from 'rxjs';
import { NavigationComponent } from '../navigation/navigation.component';

const articleUrl = 'http://localhost:3000/article'

@Component({
  selector: 'app-article-update-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NavigationComponent
  ],
  templateUrl: './article-update-form.component.html',
  styleUrl: './article-update-form.component.css'
})

export class ArticleUpdateFormComponent {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  article : Article = {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getArticleById(id).subscribe({
      next: res => {
        this.article = res
      }
    })
  }

  getArticleById(id:number) : Observable<Article> {
    return this.http.get(`${articleUrl}/${id}`)
  }

  updateArticleById(data:any) : Observable<Article> {
    return this.http.patch(`${articleUrl}/${this.article.id}`, data)
  }

  onSubmit() : void {
    this.updateArticleById(this.article).subscribe({
      next:res=>{
        this.router.navigate(['/article'])
      }
    })
  }

}
