import { JokesService } from './jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jokes: any[] = [];

  constructor(private JokesService: JokesService) {}

  ngOnInit() {
    this.JokesService.getRandomJoke().subscribe((joke: any) =>
      this.jokes.push(joke)
    );
  }
}
