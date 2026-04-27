import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This tag will be used in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from Angular!';
  description = 'This is a simple Angular example displaying text in HTML.';
}
