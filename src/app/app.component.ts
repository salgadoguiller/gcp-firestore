import { Component, OnInit } from '@angular/core';

import { FirestoreService } from './firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'gcp-firestore';
  data: any[];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getColletion().subscribe(data => {
      this.data = data;
    });
  }
}
