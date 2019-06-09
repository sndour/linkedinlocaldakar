import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  url_base ="https://backend-linkedin-local-dakar.herokuapp.com/"


  constructor(private http: HttpClient) { }

  makeAPayement(data){
    let options = this.createRequestOptions();
   return this.http.post(this.url_base + 'payit', data, {headers:options});
  }

  terminatePayement(token){
    let options = this.createRequestOptions();
    return this.http.get('https://preview.payexpresse.com/payment/checkout/'+token, {headers:options});
  }


  private createRequestOptions() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    console.log(headers);
    return headers;

}
  
}
