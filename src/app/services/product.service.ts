import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) {
  }

  // fatch All Product api in backend
  getAllProduct(nummberResults = 10): Observable<any> {
    return this.http.get(this.BASE_URL + '/products', {
      params: {
        limit: nummberResults.toString()
      }
    });
  }
}
