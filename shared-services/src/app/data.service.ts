
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Provides the service at the root level, making it a singleton service
})

export class DataService {
    sharedData: any;

    setData() {
      this.sharedData = "Hello This is the Shared Data using shared services";
    }

    getData() {
      return this.sharedData;
    }

    constructor(){
      this.setData();
    }
}
