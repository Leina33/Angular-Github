import { Component, OnInit } from '@angular/core';
import { Github} from '../github';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github:Github[
    
  ];


  constructor(githubService:GithubService) {
    // this.github = githubService.getGithub()
   }

  ngOnInit() {
  }

}
