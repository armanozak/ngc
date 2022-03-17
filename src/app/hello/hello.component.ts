import { Component, Inject } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  receiver = 'world';

  constructor(
    @Inject(TRANSLOCO_SCOPE) public readonly translocoScope: string
  ) {}
}
