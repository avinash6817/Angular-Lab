import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})

export class SecondcomponentComponent {
    sharedData: any;

    constructor(private dataService: DataService){
      this.sharedData = this.dataService.getData();
    }
}
