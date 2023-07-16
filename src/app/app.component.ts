import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="page-container">
      <div id="navbar" class="centre-content">
        <h1>Welcome to the Wonderful World of Signals</h1>
      </div>
      <div id="main-section">
        <ng-container *ngIf="true; else officeBrief">
          <app-find-office></app-find-office>
        </ng-container>
        <ng-template #officeBrief>
          <app-office-brief></app-office-brief>
        </ng-template>
      </div>
      <div id="footer" class="centre-content">
        Alex Davis
      </div>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  /**
   * What should this app do?
   *
   * Page opens and you are presented with a search box and a question: Which LexisNexis office do you work at?
   * You should be able to search for LexisNexis offices by Address, City, Postcode.
   * A list of offices should be displayed upon typing into the box.
   * Clicking a list item should take you to the office brief page.
   * On this page you are displayed information such as the weather at the office, the local time, and some nearby restaurants.
   *
   */
}
