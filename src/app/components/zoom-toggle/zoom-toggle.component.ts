import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-zoom-toggle',
  templateUrl: './zoom-toggle.component.html',
  styleUrls: ['./zoom-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomToggleComponent implements OnInit {
  @Input() increment = 10;
  @Input() currentZoom = 100;
  @Output() zoom = new EventEmitter<number>(); // %

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  zoomIn() {
    if (this.currentZoom >= 100) {
      this.currentZoom = 100;
      this.cdRef.markForCheck();
      return;
    }
    this.currentZoom += this.increment;
    this.zoom.emit(this.currentZoom);
    this.cdRef.markForCheck();
  }

  zoomOut() {
    if (this.currentZoom - this.increment <= 0) {
      return;
    }
    this.currentZoom -= this.increment;
    this.zoom.emit(this.currentZoom);
    this.cdRef.markForCheck();
  }
}
