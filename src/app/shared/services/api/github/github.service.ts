import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url = "https://api.github.com/repos/vaibhavjainongraph/FetchGitCommits/commits";

  constructor(private httpClient: HttpClient) { }

  getCommits() {
    return this.httpClient.get(this.url);
  }
}
