import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NearlyComponent} from "./nearly/nearly.component";
import {BsComponent} from "./bs/bs.component";
import {CaughtComponent} from "./caught/caught.component";

const routes: Routes = [
  {path: '', redirectTo: '/nearly', pathMatch: 'full'},
  {path: 'nearly', component: NearlyComponent},
  {path: 'bs', component: BsComponent},
  {path: 'caught', component: CaughtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
