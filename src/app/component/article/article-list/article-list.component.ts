import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../../models/article.model';
import { CommonModule } from '@angular/common';

const articleUrl = 'http://localhost:3000/article'

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HttpClientModule
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  constructor(private router: Router, private http: HttpClient) {}

  articles : Article[] = []

  ngOnInit(): void {
    this.getAllArticle().subscribe({
      next: res => {
        this.articles = res
      }
    })
  }

  getAllArticle() : Observable<Article[]> {
    return this.http.get(articleUrl) as Observable<Article[]>
  }

  navigateToUpdate(articleId: number): void {
    this.router.navigate(['/article/detail', articleId]);
  }
}
