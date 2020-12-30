import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../modal-new-card/modal-new-card.component';

@Component({
  selector: 'app-modal-edit-card-item',
  templateUrl: './modal-edit-card-item.component.html',
  styleUrls: ['./modal-edit-card-item.component.css']
})
export class ModalEditCardItemComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalEditCardItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
