import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getCommits() {
    // console.log("url",environment.baseApiUrl + '/repos/' + environment.username + '/' + environment.repoName + "/commits");
    return this.httpClient.get(environment.baseApiUrl + '/repos/' + environment.username + '/' + environment.repoName + "/commits");
  }
}
