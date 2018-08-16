import { Component, OnInit } from '@angular/core';
import { JokesService } from './services/jokes.service';
​
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 joke: any;
 constructor(private jokes: JokesService) {}
​
 ngOnInIt() {}
​
 getRandomJoke() {
  this.jokes.getRandom()
  //same as .then
  //  |
  .subscribe((joke)=> this.joke = joke);
 }
}