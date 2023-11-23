import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-demo',
  templateUrl: './two-way-binding-demo.component.html',
  styleUrls: ['./two-way-binding-demo.component.css']
})
export class TwoWayBindingDemoComponent {
  message: string = "Hello, Angular!";
}
