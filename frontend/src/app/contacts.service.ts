import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { contacts } from './contacts';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  private apiUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<contacts[]> {
    return this.http.get<contacts[]>(this.apiUrl);
  }

  getContact(id: number): Observable<contacts> {
    return this.http.get<contacts>(`${this.apiUrl}/${id}`);
  }

  createContact(contacts: contacts): Observable<contacts> {
    return this.http.post<contacts>(this.apiUrl, contacts);
  }

  updateContact(contacts: contacts): Observable<contacts> {
    return this.http.put<contacts>(`${this.apiUrl}/${contacts.id}`, contacts);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}