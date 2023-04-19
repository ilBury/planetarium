import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../games/components/solar-system/solar-system.component';
import { ChooseSessionsService } from '../../services/choose-sessions.service';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private choose: ChooseSessionsService
  ) {

  }

  onNoClick(): void {
    console.log('hello')
  }

  confirm() {
    this.choose.isPaymentComplete = true;
    this.data.confirm();
    this.dialogRef.close();
  }
}
