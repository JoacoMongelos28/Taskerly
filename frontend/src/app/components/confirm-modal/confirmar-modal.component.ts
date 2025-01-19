import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TareasService } from '../../core/service/api.service';

@Component({
  selector: 'app-confirmar-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-modal.component.html',
  styleUrl: './confirmar-modal.component.css',
})
export class ConfirmarModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmarModalComponent>,
    private tareaService: TareasService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmar(): void {
    this.tareaService.eliminarTarea(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error al eliminar la tarea:', error);
        this.dialogRef.close(false);
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
