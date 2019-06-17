import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { PaiementService } from '../paiement.service';

@Component({
  selector: 'app-sponsors-contact',
  templateUrl: './sponsors-contact.component.html',
  styleUrls: ['./sponsors-contact.component.css']
})
export class SponsorsContactComponent implements OnInit {
  sendEmail = this.se.group({
    nom: ['', Validators.required],
    email: ['', Validators.required],
    sujet: ['', Validators.email],
    site: ['',Validators.maxLength(100)],
    message: ['', Validators.required]
     });

     validate;
  constructor(private se: FormBuilder, private paiementService:PaiementService) { }

  ngOnInit() {
    this.validate = false;
    window.scrollTo(0, 0);
  }

  sendEmailtoUs (data){
    console.log(data);
    this.paiementService.sendEmailtoBoss(data).subscribe(
      (response) => {
        let doc =new courriel ();
        doc.emailify(response);
        console.log(data.adresse);
        //console.log(response.email);
        if (data.adresse ==='ok'){
          this.validate = true;
        }
      }
    )
  }

}
export class courriel {
  content;
  adresse ;
  emailify(content) {
    this.adresse = this.content.email;
  }
}