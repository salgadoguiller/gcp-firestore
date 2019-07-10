import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private colletion: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.colletion = this.db.collection<any>('users');
  }

  createId() {
    return this.db.createId();
  }

  getColletion(): Observable<any[]> {
    return this.colletion.valueChanges();
  }

  addItem(item: any) {
    this.colletion.add(item);
  }
}
