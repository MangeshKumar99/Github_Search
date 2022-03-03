import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getProfileInfo(username: any) {
    return this.http
      .get(
        'https://api.github.com/search/users?q=' +
          username +
          '&per_page=100&page=2'
      )
      .pipe(map((res) => res));
  }
  getRepositoryInfo(username: any) {
    return this.http
      .get(
        'https://api.github.com/search/repositories?q=' +
          username +
          '&per_page=100&page=2'
      )
      .pipe(map((res) => res));
  }
  getUserDetails(username: any) {
    return this.http
      .get('https://api.github.com/users/' + username)
      .pipe(map((res) => res));
  }
  getUserRepos(username: any) {
    return this.http
      .get('https://api.github.com/users/' + username + '/repos')
      .pipe(map((res) => res));
  }
  getRepositoryDetails(username: any, repository: any) {
    return this.http
      .get('https://api.github.com/repos/' + username + '/' + repository)
      .pipe(map((res) => res));
  }
}
