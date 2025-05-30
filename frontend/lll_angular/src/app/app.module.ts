import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // ✅ This line
import { WordListPageComponent } from './pages/word-list-page/word-list-page.component';
import { ApiTestPageComponent } from './pages/api-test-page/api-test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListPageComponent,
    ApiTestPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
