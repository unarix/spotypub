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

  exito: boolean;
  error: boolean;
  mensaje: string;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      this.spotify.getToken();
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );

    });

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
    console.log("paso con id: " + id);
    this.spotify.setNextTrack(id).subscribe(
      (val) => {
          console.log(val);
          this.exito = true;
          this.mensaje = "Tu cancion ya esta en la lista de reproduccion!"
      },
      response => {
          console.log("ERROR EN LA RESPUESTA", response);
          this.error = true;
          this.mensaje = "Token invalido"
      },
      () => {
          console.log("llamada completa...");
      });
  }
}
