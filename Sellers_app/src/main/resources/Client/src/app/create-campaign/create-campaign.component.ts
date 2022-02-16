import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';
import { Resources } from '../Resource';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { BalanceServiceService } from '../balance-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  cities = Resources.POLAND_CITIES;
  minValue = Resources.MIN_BID_AMOUNT;
  filtredValues1: string[] = Resources.Words;
  myControl: FormControl = new FormControl();
  balance: number = 0;
  campaing: Campaign = {
    id: 0,
    campaignName: "",
    keywords: "",
    bidAmount: 0,
    campaignFund: 0,
    status: "off",
    town: "",
    radius: 0
  };


  constructor(private campaigneService: CampaignsService, private location: Location, private balanceService: BalanceServiceService, private router: Router) { }

  ngOnInit(): void {
    this.balanceService.get().subscribe((balance) => {
      this.balance = balance;
    });
    this.myControl.valueChanges.subscribe(newValue => {
      this.filtredValues1 = Resources.Words.filter(value => value.toLowerCase().indexOf(newValue.toLowerCase()) === 0);
      this.campaing.keywords = this.myControl.value
      console.log(this.myControl.value);
    })


  }


  onNameChange(event: any): void {
    this.campaing.campaignName = event.value;
  }
  onTownChange(event: any): void {
    this.campaing.town = event.value;
  }

  onBidChange(event: any): void {

    this.campaing.bidAmount = event.value;



  }
  onFundChange(event: any): void {
    this.campaing.campaignFund = event.value;

  }
  onStatusChange(event: any): void {
    this.campaing.status = event.value;
  }

  onRadiusChange(event: any): void {
    this.campaing.radius = event.value;
  }
  onSubmit(): void {
    if (this.campaing.bidAmount < this.minValue || this.campaing.campaignName == "" || this.campaing.keywords == "" || this.campaing.campaignFund < 0 || this.campaing.town == "" || this.campaing.radius < 0 || this.campaing.status == "") {
      console.log('provide correct data');

      return;
    }
    this.balanceService.updateBalance(this.campaing.campaignFund);

    this.campaigneService.create(this.campaing).subscribe((r) => this.router.navigate(["/"]))

  }

  goBack() {

    this.location.back();

  }
}
