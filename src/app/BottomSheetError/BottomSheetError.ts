import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'bottom-sheet-error',
  templateUrl: 'bottom-sheet-error.html',
  // styleUrls: ['./question.component.scss']
})
export class BottomSheetError implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetError>) { }
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
