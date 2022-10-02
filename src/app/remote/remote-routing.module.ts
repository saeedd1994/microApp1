import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RemoteComponent} from "./remote.component";

const routes: Routes = [{
  path:'',
  component: RemoteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteRoutingModule { }
