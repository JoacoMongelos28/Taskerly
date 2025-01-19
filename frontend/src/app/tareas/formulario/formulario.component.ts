import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Tarea, TareasService } from '../../core/service/api.service';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDialogModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tarea: Tarea = { id: 0, titulo: '', descripcion: '', completada: false };

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    private tareasService: TareasService,
    @Inject(MAT_DIALOG_DATA) public data: Tarea
  ) {
    if (data) {
      this.tarea = { ...data };
    }
  }

  saveChanges(): void {

    if (!this.tarea.titulo.trim() || !this.tarea.descripcion.trim()) {
      return;
    }

    const tareaGuardada: Tarea = {
      id: this.data?.id || 0,
      titulo: this.tarea.titulo,
      descripcion: this.tarea.descripcion,
      completada: this.tarea.completada || false,
    };

    if (this.data?.id) {
      this.tareasService.editarTarea(tareaGuardada).subscribe({
        next: (respuesta) => {
          this.dialogRef.close(respuesta);
        },
        error: (error) => {
          console.error('Error al actualizar tarea:', error);
        },
      });
    } else {
      this.tareasService.crearTarea(this.tarea).subscribe({
        next: (respuesta) => {
          this.dialogRef.close(respuesta);
        },
        error: (error) => console.error('Error al crear tarea:', error),
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
