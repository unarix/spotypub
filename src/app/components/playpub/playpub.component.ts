import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
//import { getRandomString } from 'selenium-webdriver/safari';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-playpub',
  templateUrl: './playpub.component.html',
  styleUrls: ['./playpub.component.css']
})
export class PlaypubComponent implements OnInit {

  loading: boolean;
  playlist: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService ) {
    
    this.loading = false;

    //this.router.params.subscribe( params => { });

  }

  ngOnInit() {
    this.getPlaylist("7bbQjBOgCCaTmZxhQXKRwU");
  }
  

  getPlaylist( id: string ) {

    this.loading = true;

    this.spotify.getPlaylist( id )
            .subscribe( playlist => {
              console.log(playlist);
              this.playlist = playlist;
              this.loading = false;
            });
  }

  myDate(fecha: string){
    let myDate = new Date(fecha);
    //this.datePipe.transform(myDate, 'yyyy-MM-dd'); 
    return "Agregado el " + myDate;
  }
}
