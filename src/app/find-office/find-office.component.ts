import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-find-office',
  template: `
  <div id="content-container">
    <div id="name-column" class="column centre-content">Col 1</div>
    <div id="address-column" class="column centre-content">Col 2</div>
    <div id="job-column"class="column centre-content">Col 3</div>
  </div>
  `,
  styleUrls: ['./find-office.component.less']
})
export class FindOfficeComponent {

}
