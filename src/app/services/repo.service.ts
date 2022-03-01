import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
api = 'https://api.github.com/users/DeepakMane15/repos'
token = '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';
  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('Authorization',`Bearer ${this.token}`)
  get(name:any){
    const res = this.httpClient.get(`https://api.github.com/users/${name['name']}/repos`,{'headers':this.headers});
    return res;
  }
}
