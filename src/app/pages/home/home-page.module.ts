import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home.component';
import { SharedComponentModule } from 'src/app/components/shared-component.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SharedComponentModule
  ]
})
export class HomePageModule { }
