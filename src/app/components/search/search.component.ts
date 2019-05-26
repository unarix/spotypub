import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService, private router: Router ) { 


  //La data es lo que regresa el servicio
  this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
      }, ( errorServicio ) => {
        localStorage.setItem('logOk', 'false');
        this.router.navigate(['/login']);
      });
  }
  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.spotify.getArtistas( termino )
          .subscribe( (data: any) => {
            console.log(data);
            this.artistas = data;
            this.loading = false;
          });
  }

}
