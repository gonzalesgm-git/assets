import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }   from '@angular/router';

import { HomeComponent } from './home.component';
import { TestComponent } from './test.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      
       { path: ':tenant/home', component: HomeComponent},
       { path: ':tenant/test', component: TestComponent}
      
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
