import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'flight', redirectTo: 'flight/index', pathMatch: 'full'},
  { path: 'flight/index', component: IndexComponent },
  { path: 'flight/:flightId/view', component: ViewComponent },
  { path: 'flight/create', component: CreateComponent },
  { path: 'flight/:flightId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
