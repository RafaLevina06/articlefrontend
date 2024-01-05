import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUpdateFormComponent } from './article-update-form.component';

describe('ArticleUpdateFormComponent', () => {
  let component: ArticleUpdateFormComponent;
  let fixture: ComponentFixture<ArticleUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
