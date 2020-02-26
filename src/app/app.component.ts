import { Component } from '@angular/core';

// Define the decorator right above the class. There is no semicolon in between the decorator and the class.
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{ pageTitle }}</h1>
    <div>My First Component</div>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}