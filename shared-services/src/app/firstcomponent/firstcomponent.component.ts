import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})


export class FirstcomponentComponent {
  sharedData: any;

  constructor(private dataService: DataService) {
    this.sharedData = this.dataService.getData();
  }
}