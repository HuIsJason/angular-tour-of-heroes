import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Giant } from './giant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Jormungandr' },
      { id: 12, name: 'Thamur' },
      { id: 13, name: 'Hraesvelgr' },
      { id: 14, name: 'Fenrir' },
      { id: 15, name: 'Surtr' },
      { id: 16, name: 'Starkadr' },
      { id: 17, name: 'Ymir' },
      { id: 18, name: 'Laufey' },
      { id: 19, name: 'Loki' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a giant always has an id.
  // If the giants array is empty,
  // the method below returns the initial number (11).
  // if the giants array is not empty, the method below returns the highest
  // giant id + 1.
  genId(giants: Giant[]): number {
    return giants.length > 0 ? Math.max(...giants.map(giant => giant.id)) + 1 : 11;
  }
}
