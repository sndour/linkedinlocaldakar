import { Component, OnInit } from '@angular/core';
import { PaiementService } from '../paiement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logged',
  templateUrl: './admin-logged.component.html',
  styleUrls: ['./admin-logged.component.css']
})
export class AdminLoggedComponent implements OnInit {
  paiements;
  constructor(private paiementService: PaiementService, private router: Router) { }

  ngOnInit() {
    if  (!localStorage.getItem('data')){
      this.router.navigate(['/login']);
    } else{
    this.paiementService.getPayement().subscribe(
      (data) => {
        console.log(data);
        this.paiements = data;
      }
    )
  }
  }

  onSignOut(){
    localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }
}
