import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';

const routes: Routes = [
  { path: '', component: CampaignListComponent },
  { path: 'add', component: CreateCampaignComponent },
  { path: 'edit/:id', component: CampaignEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
