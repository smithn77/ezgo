import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../../models/location'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ApplicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const url = 'sample.com';
@Injectable(
  
)
export class ApplicationProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello ApplicationProvider Provider');
  }

  GetLocations(searchKey:string):Observable<Location[]>
  {
    const queryUrl = `${url}/location/${searchKey}`;

    return this.http.get<Location[]>(queryUrl);
  }
}

