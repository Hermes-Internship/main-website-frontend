import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/assets/interfaces/news';



@Injectable({
  providedIn: 'root'
})
export class HermesMainServiceService {

  constructor(private http: HttpClient) {}


  public getPosts(): Observable<News[]>{
      return this.http.get<News[]>('http://applicationhermesinternshipbackend-env.eba-z6utwcyu.eu-central-1.elasticbeanstalk.com/news')
  }

  
}
