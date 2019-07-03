import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PaiementService } from '../paiement.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;


  constructor(private paiementService: PaiementService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)
        ]]
      }
    );
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    const data = {email: email, mdp: password};
    this.paiementService.login(data).subscribe(
      (data) => {
        console.log(data);
        const myToken = new DataToken();
        myToken.data = data;
        myToken.exportToken();
        localStorage.setItem('data', myToken.token);
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.errorMessage = error.message
      }
    );
    // this.authService.signInUser(email, password).then(
    //   () => {
    //     this.router.navigate(['/books']);
    //   },
    //   (error) => {
    //     this.errorMessage = error;
    //   }
    // );
  }

}

export class DataToken {
  token;
  data;

  exportToken() {
    this.token = this.data.token;
  }
}