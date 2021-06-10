import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoutesComponent } from './routes.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '/',redirectTo:'/login'
  },
  {path: 'route',component:RoutesComponent},
  {path: 'login',component:LoginComponent},
  {path: 'test',component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
