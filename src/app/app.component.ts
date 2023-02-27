import { JokesService } from './jokes.service';
import { Component, OnInit } from '@angular/core';

// Models
import { Joke } from './joke.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jokes: Joke[] = [];
  categories: string[] = [];

  constructor(private jokesService: JokesService) {}

  ngOnInit() {
    this.jokesService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
    this.jokesService
      .getRandomJoke()
      .subscribe((joke: Joke) => this.jokes.push(joke));
  }
  // Search by category
  searchByCategory(category: string) {
    this.jokesService.getCategoryJoke(category).subscribe((joke: Joke) => {
      this.jokes = [];
      this.jokes.push(joke);
    });
  }
  // Search by Serach Term
  searchBySearchTerm(searchTerm: string) {
    if (searchTerm !== '') {
      this.jokesService.getSearchJokes(searchTerm).subscribe((jokes) => {
        this.jokes = jokes.result;
      });
    }
  }
}
