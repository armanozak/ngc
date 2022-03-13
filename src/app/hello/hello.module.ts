import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [HelloRoutingModule, FormsModule, MatInputModule]
})
export class HelloModule {}
