import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //interpolación (pasar lógica a la vista)
  protected readonly nombres = signal('');
  protected readonly correo = signal('');
  protected readonly password = signal('');
  protected readonly aceptoTerminos = signal(false);
  protected readonly mensaje = signal('');

  guardar() {
  
    if (!this.nombres() || !this.correo() || !this.password() || !this.aceptoTerminos()) {
      this.mensaje.set('⚠️ Por favor completa todos los campos y acepta los términos.');
      this.ocultarMensaje();
      return;
    }

    this.mensaje.set('✅ Datos guardados correctamente.');
    this.ocultarMensaje();

    console.log('Nombre:', this.nombres());
    console.log('Correo:', this.correo());
    console.log('Password:', this.password());
    console.log('Acepto términos:', this.aceptoTerminos());
  }


    private ocultarMensaje(){
      setTimeout(() => {
        this.mensaje.set('');
      }, 3000);
    }
}
