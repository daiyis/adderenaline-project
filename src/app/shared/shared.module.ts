import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadshotComponent } from './components/headshot/headshot.component';
import { NgZorroAntdModule } from '../nz-zorro.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [HeadshotComponent],
  exports: [HeadshotComponent],
})
export class SharedModule {}
