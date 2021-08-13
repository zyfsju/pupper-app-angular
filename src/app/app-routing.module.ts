import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

const routes: Routes = [
  { path: "", component: DogFormComponent },
  { path: "list/:breed/:sub-breed", component: DogsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
