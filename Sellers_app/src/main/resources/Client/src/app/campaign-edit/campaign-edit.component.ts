import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';
import { Resources } from '../Resource';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css']
})
export class CampaignEditComponent implements OnInit {
  cities = Resources.POLAND_CITIES;
  words = Resources.Words;
  minValue = Resources.MIN_BID_AMOUNT;
  budget = 100000;
  filtredValues: string[] = Resources.Words;
  myControl: FormControl = new FormControl();

  campaing: Campaign = {
    id: 0,
    campaignName: "",
    keywords: "",
    bidAmount: 0,
    campaignFund: 0,
    status: "Off",
    town: "",
    radius: 0
  };
  constructor(private campaigneService: CampaignsService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.campaing.id = this.route.snapshot.params["id"] as number;
    this.campaigneService.get(this.campaing.id).subscribe((data) => {
      this.campaing = data
      console.log(this.campaing)
    })




    this.myControl.valueChanges.subscribe(newValue => {
      this.filtredValues = Resources.Words.filter(value => value.toLowerCase().indexOf(newValue.toLowerCase()) === 0);
      this.campaing.keywords = this.myControl.value
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
  goBack() {

    this.location.back();

  }
  save(): void {

    if (this.campaing) {
      this.campaigneService.update(this.campaing.id, this.campaing)
        .subscribe(() => this.goBack());
    }
  }
}
