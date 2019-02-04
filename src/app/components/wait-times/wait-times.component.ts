import { Component, OnInit } from '@angular/core';
import { WaitTimesService } from './wait-times.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface WaitTime {
  id: string;
  name: string;
  active: boolean;
  waitTime: number;
  fastPass: true;
  lastUpdate: Date;
  status: string;
  schedule: {
    date: Date;
    openingTime: Date;
    closingTime: Date;
    type: string;
  };
}

@Component({
  selector: 'app-wait-times',
  templateUrl: './wait-times.component.html',
  styleUrls: ['./wait-times.component.scss'],
})
export class WaitTimesComponent implements OnInit {
  public waitTimes: WaitTime[] = [];
  public selectedTab = 'Animal Kingdom';

  constructor(private waitTimesService: WaitTimesService) {}

  public ngOnInit() {
    this.getWaitTimes();
  }

  public tabChanged(selectedTab: MatTabChangeEvent): void {
    this.selectedTab = selectedTab.tab.textLabel;
    this.getWaitTimes();
  }

  public getWaitTimes(): void {
    this.waitTimesService
      .getPark(this.selectedTab)
      .subscribe((waitTimes: WaitTime[]) => (this.waitTimes = waitTimes));
  }
}
