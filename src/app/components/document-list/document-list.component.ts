import { Component, Input, OnInit } from '@angular/core';
import { ColumnItem } from '../../models';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  @Input() documents: Document[];

  listOfColumns: ColumnItem[] = [
    {
      name: 'Document Type',
    },
    {
      name: 'Document Name',
    },
    {
      name: 'Expiry',
    },
    {
      name: 'Uploaded',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
