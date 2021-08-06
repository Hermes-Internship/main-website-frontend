import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/assets/interfaces/member';



@Injectable({
  providedIn: 'root'
})
export class CdServiceService {

  constructor(private http: HttpClient) {}


  public getMembers(): Observable<Member[]>{
      return this.http.get<Member[]>('http://applicationhermesinternshipbackend-env.eba-z6utwcyu.eu-central-1.elasticbeanstalk.com/cd-member')
  }

  
}

