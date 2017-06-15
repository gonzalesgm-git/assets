import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';

// angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/materials.module';
import 'hammerjs';

import { routes, routeComponents }   from './app.routes';
import { setCurrentTenant } from './shared/utils/common-function';

import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './login/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routeComponents,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  exports: [LoginComponent, PageNotFoundComponent],
  entryComponents: [    
  ],

  providers: [
    // {
    //     provide: APP_BASE_HREF,
    //     useFactory: setCurrentTenant // setting the current tenant here
    // },
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
