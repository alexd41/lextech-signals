import { AfterViewInit, Component, ElementRef, Injector, Input, Signal, ViewChild, inject, signal } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-find-office',
  template: `
  <div id="content-container">
    <h1 id="search-title">Which LexisNexis office do you work at?</h1>
    <input type="text" id="search-box" [(ngModel)]="userText" autocomplete="off">
    <div id="output">
      {{textOutput()}}
    </div>
  </div>
  `,
  styleUrls: ['./find-office.component.less']
})
export class FindOfficeComponent {

  public textOutput = signal('');

  @Input() set userText(value: string) {
    this.textOutput.set(this.filterText(value));
  }

  // Remove non-alphanumeric characters from the input string
  private filterText(text: string): string {
    return text.replace(/[^a-zA-Z0-9]/g, '');
  }
}

