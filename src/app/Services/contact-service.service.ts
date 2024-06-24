import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icontact } from '../models/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService{

  constructor(private http: HttpClient) { }

addMessage(prd:Icontact):Observable<Icontact>
{
  return this.http.post<Icontact>(
   'http://localhost:5261/api/Contact',JSON.stringify(prd)
 )

 }
 getAllMessages():Observable<Icontact[]>  
 {
    return this.http.get<Icontact[]>('http://localhost:5261/api/Contact');
 }
 

}