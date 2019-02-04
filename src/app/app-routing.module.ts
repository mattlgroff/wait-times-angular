import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaitTimesComponent } from './components/wait-times/wait-times.component';

const routes: Routes = [{ path: '', component: WaitTimesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
