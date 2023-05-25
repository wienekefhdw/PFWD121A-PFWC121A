import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  name = 'Matthis';
  counter = 0;

  public increment(){
    this.counter++;
  }

  public decrement(){
    if(this.counter == 0){
      return;
    }
    this.counter--;
  }
}
