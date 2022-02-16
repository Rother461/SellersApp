import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign.model';
import { Observable } from "rxjs";
import { CampaignEditComponent } from '../campaign-edit/campaign-edit.component';
import { CampaignsService } from '../campaigns.service';
import { BalanceServiceService } from '../balance-service.service';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaings: Campaign[] = [];
  balance: number = 0;
  constructor(private campaigneService: CampaignsService, private balanceService: BalanceServiceService) { }

  ngOnInit(): void {
    this.campaigneService.getAll().subscribe((campaings) => {
      this.campaings = campaings;
      console.log(this.campaings);
    })
    this.balanceService.get().subscribe((balance) => {
      this.balance = balance;
    });

  }
  deleteCampaign(campaign: Campaign): void {
    this.campaings = this.campaings.filter(c => c !== campaign);
    this.campaigneService.delete(campaign.id).subscribe();
  }

}
