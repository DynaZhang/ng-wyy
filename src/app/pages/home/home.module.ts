import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {ShareModule} from '../../share/share.module';
import { HomeComponent } from './home.component';
import {HomeService} from '../../services/home.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
