import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/nz-zorro.module';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [ContactRoutingModule, NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
