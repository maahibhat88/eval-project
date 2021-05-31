import { Component, OnInit } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPrivateUser:boolean = false;
  isLoggedIn$: Observable<boolean>; 
  form: FormGroup;                  
  private formSubmitAttempt: boolean;
  wrongCreds:boolean = false;

  faInstagramSquare = faInstagramSquare;
  
  constructor(private modalService: NgbModal,private fb: FormBuilder,private authService: AuthService)  {
    this.form = this.fb.group({  
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formSubmitAttempt = false;

  }


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    this.isLoggedIn$.subscribe(res => {
      if(res){
        this.isPrivateUser = true;
      }
    })
  }

  onLogout(){
    this.authService.logout();             
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      if(this.authService.checkCredentials(this.form.value)){
        this.authService.login(this.form.value); 
      }else{
        this.wrongCreds = true;
      }
    }
    this.formSubmitAttempt = true; 
    this.isLoggedIn$.subscribe(res => {
      if(res){
        this.modalService.dismissAll();
      }
    })          
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
