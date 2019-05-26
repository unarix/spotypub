import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService, private router: Router ) {
  }

  async ngOnInit() {
    //await this.spotify.getToken();
    
    const keyValuePairs = window.location.toString();
    console.log("return: " );
    console.log(keyValuePairs);
    if (keyValuePairs.includes('=')) {
      const values = keyValuePairs.split('=');
      console.log(values);
      const valorFinal = values[1].split('&');
      console.log(valorFinal);
      localStorage.setItem('token', valorFinal[0]);
      localStorage.setItem('logOk', 'true');
      this.spotify.getAdminToken();
    }
    setTimeout(() => {
      //this.router.navigate(['/search']);
    }, 1000);


    this.loading = true;
    this.error = false;

    // En esta seccion se hace la peticion GET
    // Es necesario subscribirse cuando se ejecuta es decir estar escuchando los cambios
    // que este servicio puede regresar

    //La data es lo que regresa el servicio
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio ) => {

          this.loading = false;
          this.error = true;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
          localStorage.setItem('logOk', 'false');
          this.router.navigate(['/login']);
        });
  }

}
