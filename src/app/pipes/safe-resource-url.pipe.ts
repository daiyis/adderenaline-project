import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeResourceUrl' })
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: any) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}
