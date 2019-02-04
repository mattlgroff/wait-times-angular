import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://wait-times.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class WaitTimesService {
  constructor(private http: HttpClient) {}

  public getPark(parkName) {
    const park = this.getParkUrl(parkName);
    return this.http.get(`${baseUrl}${park}`);
  }

  private getParkUrl(parkName: string): string {
    switch (parkName) {
      case 'Animal Kingdom':
        return 'animal-kingdom';

      case 'EPCOT':
        return 'epcot';

      case 'Hollywood Studios':
        return 'hollywood-studios';

      case 'Magic Kingdom':
        return 'magic-kingdom';

      default:
        return 'animal-kingdom';
    }
  }
}
