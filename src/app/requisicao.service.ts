import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  
  constructor(public http: HttpClient) { }

  post(formData:any, ref: string){
    const httpOptions = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*','Content-Type': 'application/json'})
  }; 
    
    return this.http.post('http://localhost:8080/' + ref,formData,httpOptions);
}
get(_rota:string = '/'){
  return this.http.get("http://localhost:8080/" + _rota);
}
del(_rota:string){
  return this.http.delete("http://localhost:8080/" + _rota);
}
put(formData:any, rota:string =''){
  const httpOptions ={ 
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json'
    })
  };
  return this.http.put('http://localhost:8080/' + rota,formData,httpOptions);
}
}
