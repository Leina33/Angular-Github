import { Injectable } from '@angular/core';
import { Github } from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  getGithub(){
    return Github
  }

  constructor() { }
}
