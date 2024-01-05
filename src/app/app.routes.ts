import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ArticleListComponent } from './component/article/article-list/article-list.component';
import { ArticleAddComponent } from './component/article/article-add/article-add.component';
import { ArticleUpdateComponent } from './component/article/article-update/article-update.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ArticleUpdateFormComponent } from './component/article/article-update-form/article-update-form.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'article',
    component: ArticleListComponent,
  },
  {
    path: 'article/add',
    component: ArticleAddComponent,
  },
  {
    path: 'article/detail/:id',
    component: ArticleUpdateComponent,
  },
  {
    path: 'article/update/:id',
    component: ArticleUpdateFormComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];
