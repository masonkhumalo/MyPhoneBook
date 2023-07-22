import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  contacts:any;
  name:any;
  email:any;
  
  constructor(private http: HttpClient,private contserv: ContactsService) {
  }

  ngOnInit(): void {
    this.getAllContacts();
    
  }

  getAllContacts(): void {
    this.contserv.getAllContacts()
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
          
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
