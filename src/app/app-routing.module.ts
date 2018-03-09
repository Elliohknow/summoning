import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaturesComponent } from './creatures/creatures.component';
import { SpellsComponent } from './spells/spells.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';
import { ActiveCreaturesComponent } from './active-creatures/active-creatures.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'creatures', component: ActiveCreaturesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CreatureDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
