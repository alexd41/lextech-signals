import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="page-container">
      <div id="navbar" class="centre-content">
        <h1>Welcome to Signals</h1>
      </div>
      <div id="main-section">
        <app-find-office></app-find-office>
      </div>
      <div id="footer" class="centre-content">
        Alex Davis
      </div>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
}
