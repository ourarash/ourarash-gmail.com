import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
// import { BottomSheetError } from './BottomSheetError';
@Component({
  selector: 'bottom-sheet-correct',
  templateUrl: 'bottom-sheet-correct.html',
  // styleUrls: ['./question.component.scss']
})
export class BottomSheetCorrect implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetCorrect>) { }
  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
