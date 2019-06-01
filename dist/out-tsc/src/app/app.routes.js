import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SetokenComponent } from './components/setoken/setoken.component';
import { PlaypubComponent } from './components/playpub/playpub.component';
export var ROUTES = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'loginadmin', component: LoginadminComponent },
    { path: 'setoken', component: SetokenComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: 'playpub', component: PlaypubComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//# sourceMappingURL=app.routes.js.map