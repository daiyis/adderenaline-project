import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'src/app/nz-zorro.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
