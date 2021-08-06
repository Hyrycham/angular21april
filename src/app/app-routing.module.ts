import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routesBasic} from "./routes/basicroutes";

const routes: Routes = routesBasic;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
