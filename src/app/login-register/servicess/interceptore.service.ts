import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InterceptoreService {
  token:any
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = localStorage.getItem('token')
    if (this.token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization',this.token) });
      // console.log("This:",tokenizedReq,this.token)
      
      return next.handle(tokenizedReq);
    }
    // console.log(req)
    return next.handle(req);
   
  }
}

 

