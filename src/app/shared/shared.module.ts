import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadshotComponent } from './components/headshot/headshot.component';
import { ResumeDetailComponent } from './components/resume-detail/resume-detail.component';
import { SafeResourceUrlPipe } from '../pipes';
import { NgZorroAntdModule } from '../nz-zorro.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [HeadshotComponent, ResumeDetailComponent, SafeResourceUrlPipe],
  exports: [HeadshotComponent, ResumeDetailComponent, SafeResourceUrlPipe],
})
export class SharedModule {}
