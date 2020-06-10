import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:UserComponent},
  {path: 'usuario', component:UserComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'registro/:id', component: UserEditComponent },
  {path: '**', component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
