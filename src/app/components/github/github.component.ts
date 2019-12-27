import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/shared/services/api/github/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  commits: any;
  isLoading: boolean = false;
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getGitCommits();
  }

  getGitCommits() {
    this.isLoading = true;
    this.githubService.getCommits().subscribe(
      (res: any) => {
        this.commits = res;
        this.isLoading = false;
      }, (err) => {
        console.log('err', err);
        this.isLoading = false;
      });
  }

  reloadCommits() {
    this.getGitCommits();
  }

}
