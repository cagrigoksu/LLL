import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-list-page',
  templateUrl: './word-list-page.component.html'
})

export class WordListPageComponent implements OnInit{

  type = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const url = this.route.snapshot.routeConfig?.path;
    this.type = url === 'verbs' ? 'Verbs' : 'Nouns';

  }
}
