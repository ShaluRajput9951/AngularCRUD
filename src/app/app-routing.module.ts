import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '' , redirectTo: 'turorials' , pathMatch: 'full'},
  {
    path: 'tutorials' , component: TutorialsListComponent
  },
  { path : 'tutorials/:id' , component: TutorialDetailsComponent},
  { path:'add' , component: AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
