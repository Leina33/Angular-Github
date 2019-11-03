import { Injectable } from '@angular/core';
import { Github } from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  github:Github = [
    new Github ()
  ]

  getGithub(){
    return Github
  }

  constructor() { }
}
