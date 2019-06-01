import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// Importar rutas
import { ROUTES } from './app.routes';
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { SetokenComponent } from './components/setoken/setoken.component';
import { PlaypubComponent } from './components/playpub/playpub.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                SearchComponent,
                HomeComponent,
                ArtistaComponent,
                NavbarComponent,
                NoimagePipe,
                DomseguroPipe,
                TarjetasComponent,
                LoadingComponent,
                LoginComponent,
                LoginadminComponent,
                SetokenComponent,
                PlaypubComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                // RouterModule.forRoot( ROUTES, { useHash: true } )
                RouterModule.forRoot(ROUTES)
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map