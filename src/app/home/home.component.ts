import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PaiementService } from '../paiement.service';
import { PayExpresse } from 'src/assets/js/payexpresse.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // payementForm20 = this.fb.group({
  //   prenom: ['', Validators.required],
  //   nom: ['', Validators.required],
  //   email: ['', Validators.email],
  //   tel: ['', Validators.required],
  //   price: ['20000']
  // });

  emailNewsLetter = new FormControl('', [Validators.email]);
  value='';
  time;
  timerid;
  days;
  hours;
  mins;
  secs;
  // payementForm30 = this.fb.group({
  //   prenom: ['', Validators.required],
  //   nom: ['', Validators.required],
  //   email: ['', Validators.email],
  //   tel: ['', Validators.required],
  //   price: ['30000']
  // });
  constructor(private fb: FormBuilder, private paiementService: PaiementService) { }

  ngOnInit() {
  // this.loadScripts();
    //window.scrollTo(0, 0);
    this.timer();
    this.loadScriptsBody();
  }

  onSubmit(){
    // console.warn(this.payementForm20.value);
    // let data  = new paiement();
    // data.nom = this.payementForm20.value.nom;
    // data.prenom = this.payementForm20.value.prenom;
    // data.tel = this.payementForm20.value.tel;
    // data.price = this.payementForm20.value.price;
    // data.email = this.payementForm20.value.email;

   //this.doRequest(data);
    // this.paiementService.makeAPayement(data).subscribe(
    //   (complete)=>{
    //     console.log(complete);
    //     let content = complete;
    //     console.log(content);
    //      let brams = new getUrl();
    //      brams.content = content;
    //      brams.tokenize();
    //      console.log('url',brams.url);
    //      window.open(brams.url,"Payexpresse","location=yes,resizable=yes,scrollbars=yes,status=yes");
      //  this.paiementService.terminatePayement(brams.url).subscribe(
      //    (content)=>{
      //      console.log('le contenu de la requete', content);
      //    }
      //  );
       
        
        // this.paiementService.terminatePayement(content).subscribe(
        //   (terminate)=>{
        //     console.log(terminate);
        //     window.open('https://preview.payexpresse.com/payment/checkout/'+terminate, 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=350');
        //   }
        // )
      
    
    
  }

  // doRequest(data) {

  //   (new PayExpresse(data)).withOption({
  //   requestTokenUrl           :   'https://backend-linkedin-local-dakar.herokuapp.com/api/payit',
  //   method              :   'POST',
  //   headers             :   {
  //   "Accept"          :    "text/html"
  //   },
  //   prensentationMode   :   PayExpresse.OPEN_IN_POPUP,
  //   didPopupClosed:  (is_completed, success_url, cancel_url) => {
    
  //   },
  //   willGetToken        :    () => {
  //   console.log("Je me prepare a obtenir un token");
  //   },
  //   didGetToken         : (token, redirectUrl) => {
  //   console.log("Mon token est : " +  token  + ' et url est ' + redirectUrl );
    
  //   },
  //   didReceiveError: function (error) {
  //   console.log(error)
  //   },
  //   didReceiveNonSuccessResponse: function (jsonResponse) {
  //   console.log('non success response ',jsonResponse);
  //   }
  //   }).send();
  //   }
    
  onSubmit30(){
  }

  onSubscribe(){

  }


  loadScripts() {
    const dynamicScripts = [
      
      'assets/js/appear.js',
      'assets/js/validate.js',
      'assets/js/mixitup.js',
      'assets/js/map-script.js',
      'assets/js/jquery.mixitup.min.js',
      'assets/js/jquery.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/jquery.fancybox.js',
      'assets/js/owl.js', 
      'assets/js/wow.js',
      'assets/js/jquery.easing.min.js',   
      'assets/js/jquery.countTo.js',
      'assets/js/jquery.countdown.min.js',
      'assets/js/jquery-ui.js',
      'assets/js/isotope.js',
      'assets/js/custom.js',
      'assets/js/bxslider.js' 
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


  loadScriptsBody(){
    const dynamicScripts = [
      'assets/js/map.js',
      'assets/js/mapbox.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  timer() {
    //console.log(date);
    // this.timerid = new Date(date).getTime();
    this.timerid = new Date("2019-07-06T09:00:00").getTime();
    

    this.time = setInterval(() => {

        let now = new Date().getTime();
        

        let t = this.timerid - now;

        if (t >= 0) {

            this.days = Math.floor(t / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            this.secs = Math.floor((t % (1000 * 60)) / 1000);

            // console.log(this.days);
            // console.log(this.hours);
            // console.log(this.mins);
            // console.log(this.secs);

        } else {
            console.log(t);
        }
    }, 1000);


    //this.time = this.timerService.timer(new Date(date));
   //console.log(this.time);

   
}
ngOnDestroy(){
  console.log('destroyed!!');
  clearInterval(this.time);
}

}


export class paiement{
  nom;
  prenom;
  email;
  tel;
  price;
}

export class getUrl{
  content;
  url;
  tokenize(): string{
  return this.url = this.content.jsonResponse.redirect_url;
}
}