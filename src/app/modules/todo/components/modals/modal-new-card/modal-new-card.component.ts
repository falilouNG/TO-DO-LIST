import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-modal-new-card',
  templateUrl: './modal-new-card.component.html',
  styleUrls: ['./modal-new-card.component.css']
})
export class ModalNewCardComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalNewCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
