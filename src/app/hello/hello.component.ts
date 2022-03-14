import { Component, Inject } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-hello',
  template: `
    <div class="container" *transloco="let t; read: translocoScope">
      <form>
        <mat-form-field appearance="fill">
          <mat-label>{{ t('_label.receiver') }}</mat-label>
          <input
            matInput
            placeholder="Eg. Angular"
            name="receiver"
            [(ngModel)]="receiver"
          />
        </mat-form-field>
      </form>

      <h1>{{ t('greeting', { receiver }) }}</h1>
    </div>
  `,
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  receiver = 'world';

  constructor(
    @Inject(TRANSLOCO_SCOPE) public readonly translocoScope: string
  ) {}
}
