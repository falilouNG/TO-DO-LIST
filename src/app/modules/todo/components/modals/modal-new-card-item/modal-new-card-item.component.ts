import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../modal-new-card/modal-new-card.component';

@Component({
  selector: 'app-modal-new-card-item',
  templateUrl: './modal-new-card-item.component.html',
  styleUrls: ['./modal-new-card-item.component.css']
})
export class ModalNewCardItemComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalNewCardItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
