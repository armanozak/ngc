import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="container">
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Greeting Target</mat-label>
          <input
            matInput
            placeholder="Eg. Angular"
            name="target"
            [(ngModel)]="greetingTarget"
          />
        </mat-form-field>
      </form>

      <h1>Hello {{ greetingTarget }}</h1>
    </div>
  `,
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  greetingTarget = 'world';
}
