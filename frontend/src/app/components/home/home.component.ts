import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  constructor(private http: HttpClient ,private contserv: ContactsService,private fb:FormBuilder, private router: Router,) {}
  baseUrl = "http://localhost:3000/contacts";

 

  

}
