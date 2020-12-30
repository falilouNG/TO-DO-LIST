import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.css']
})
export class ModalConfirmDeleteComponent  {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {context: string}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
