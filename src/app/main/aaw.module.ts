import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }   from '@angular/router';

import { HomeComponent } from './home.component';
import { TestComponent } from './test.component';

import { APP_BASE_HREF, Location } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      
       { path: 'home', component: HomeComponent},
       { path: 'test', component: TestComponent}
      
    ])
  ],
  declarations: [
    HomeComponent,
    TestComponent
  ],
  providers: [
 
  ]
})
export class AawModule {
}
