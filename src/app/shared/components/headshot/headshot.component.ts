import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-headshot',
  templateUrl: './headshot.component.html',
  styleUrls: ['./headshot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadshotComponent implements OnInit {
  @Input() imageThumbnailUrl: string;
  @Input() imageUrl: string;
  @Input() initials: string;
  @Input() quickViewEnabled: boolean;
  @Input() editEnabled = false;
  @Input() actionUrl: string;

  @Output() click = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() imageUploaded = new EventEmitter();

  imageNotFound: boolean;
  isFullViewVisible: boolean;
  dragCounter: number;

  ngOnInit(): void {}

  onImageLoadError() {
    this.imageNotFound = true;
  }

  deleteImage() {
    this.isFullViewVisible = false;
    this.delete.emit();
  }

  fileChanged(uploadState: NzUploadChangeParam) {
    if (uploadState.file.status === 'done') {
      this.imageUploaded.emit(uploadState.file.response);
    }
  }
}
