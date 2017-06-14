

import { NgModule } from '@angular/core';
import {MdInputModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule , 
        MdCardModule, MdDialogModule,  } from '@angular/material';


@NgModule({
  declarations: [
  ],
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdDialogModule,
    
   
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdDialogModule
    
  ],
})
export class MaterialModule { }