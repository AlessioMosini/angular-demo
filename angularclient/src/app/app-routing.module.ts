import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StringoneListComponent} from "./stringone/stringone-list/stringone-list.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
