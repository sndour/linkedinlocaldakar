import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  url_base ="https://backend-linkedin-local-dakar.herokuapp.com/api/"
  url_base2 = "https://backend-linkedin-local-dakar.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  makeAPayement(data){
    let options = this.createRequestOptions();
   return this.http.post(this.url_base + 'payit', data, {headers:options});
  }

  terminatePayement(content){
    let data = {"checkoutUrl": content};
    let datum = JSON.stringify(data);
    console.log('on affiche datum', datum);
    let options = this.createRequestOptions();
    return this.http.post(this.url_base+ 'checkout', datum, {headers:options}) ;
  }

  saveSubscriber(){

  }
  sendEmailtoBoss(data){
      let options = this.createRequestOptions();
      return this.http.post(this.url_base+ 'email', data, {headers:options})
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    console.log(headers);
    return headers;

}
private createRequestOptions1() {
  let headers = new HttpHeaders({
    'Accept'          :    'text/html'
  });
  console.log(headers);
  return headers;

}
  
}
