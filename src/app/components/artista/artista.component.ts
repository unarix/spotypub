import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;
  loading: boolean;

  exito: boolean;
  error: boolean;
  mensaje: string;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.loadingArtist = true;
    this.loading = false;

    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });

  }


  millisToMinutesAndSeconds(millis) {
    let minutes: number = Math.floor(millis / 60000);
    let seconds: number = ((millis % 60000) / 1000);
    var secondsx = (seconds < 10 ? '0' : '') 
    return minutes + ":" + secondsx + seconds.toFixed(0);
  }

  getArtista( id: string ) {

    this.loadingArtist = true;

    this.spotify.getArtista( id )
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;

            this.loadingArtist = false;
          });

  }

  getTopTracks( id: string ) {
 
    this.spotify.getTopTracks( id )
            .subscribe( topTracks => {
              console.log(topTracks);
              this.topTracks = topTracks;
            });

  }

  setNextTrack( id: string)
  {
    this.loading = true;

    this.spotify.getAdminToken();

    console.log("paso con id: " + id);
    this.spotify.setNextTrack(id).subscribe(
      (val) => {
          console.log(val);
          this.exito = true;
          this.mensaje = "Tu cancion ya esta en la lista de reproduccion!"
          this.loading = false;
      },
      response => {
          this.loading = false;
          console.log("ERROR EN LA RESPUESTA", response);
          this.error = true;
          this.mensaje = "Token invalido"
      },
      () => {
          console.log("llamada completa...");
      });
  }
}
