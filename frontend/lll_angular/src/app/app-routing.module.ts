import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordListPageComponent } from './pages/word-list-page/word-list-page.component';
import { ApiTestPageComponent } from './pages/api-test-page/api-test-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/nouns', pathMatch: 'full' },
  { path: 'nouns', component: WordListPageComponent },
  { path: 'verbs', component: WordListPageComponent },
  { path: 'test', component: ApiTestPageComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
