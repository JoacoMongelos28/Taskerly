import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Componente raíz de la aplicación
import { provideHttpClient } from '@angular/common/http'; // Para HTTP
import { provideRouter } from '@angular/router'; // Si estás usando enrutador
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Definir rutas si es necesario
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Para proporcionar HttpClient
    provideRouter(routes),
    provideAnimationsAsync(), // Si usas enrutador, agregar rutas aquí
    importProvidersFrom(
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      BrowserAnimationsModule
    ),
  ],
}).catch((err) => console.error(err)); // Manejo de errores
