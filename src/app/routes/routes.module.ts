import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import {NgZorroAntdModule} from '../components/ng-zorro-antd.module'
@NgModule({
  declarations: [
    RoutesComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,

    NgZorroAntdModule
  ]
})
export class RoutesModule { }
