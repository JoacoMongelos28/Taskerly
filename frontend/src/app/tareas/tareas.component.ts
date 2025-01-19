import { Component, OnInit } from '@angular/core';
import { Tarea, TareasService } from '../core/service/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmarModalComponent } from '../components/confirm-modal/confirmar-modal.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(
    private tareasService: TareasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareasService.obtenerTareas().subscribe(
      (data) => {
        this.tareas = data;
      },
      (error) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  eliminarItem(itemId: number): void {
    this.tareasService.eliminarTarea(itemId).subscribe(() => {
      this.obtenerTareas();
    });
  }

  toggleCompletada(tarea: Tarea): void {
    this.tareasService.editarTarea(tarea).subscribe(
      () => {
      },
      (error) => {
        console.error('Error al actualizar la tarea:', error);
        tarea.completada = !tarea.completada;
      }
    );
  }

  openConfirmarModal(itemId: number, titulo: string): void {
    const dialogRef = this.dialog.open(ConfirmarModalComponent, {
      data: { id: itemId, titulo: titulo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.obtenerTareas();
      }
    });
  }

  openFormulario(tarea?: Tarea): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px',
      data: tarea || null,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.obtenerTareas();
      }
    });
  }
}
