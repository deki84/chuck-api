import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private apiUrl = 'https://api.chucknorris.io/jokes/';
  constructor(private http: HttpClient) {}

  // Get Random Joke
  getRandomJoke() {
    return this.http.get(this.apiUrl + 'random');
  }
}
