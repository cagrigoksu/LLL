import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListPageComponent } from './word-list-page.component';

describe('WordListPageComponent', () => {
  let component: WordListPageComponent;
  let fixture: ComponentFixture<WordListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordListPageComponent]
    });
    fixture = TestBed.createComponent(WordListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
