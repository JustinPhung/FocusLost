import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  amountChangeEvent: number = 0;

  title = 'Dynamic Schema Focus Lost';

  data: any = {};

  schema: any = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "subspecies": {
        "type": "string",
        "title": "Subspecies"
      }
    }
  }

  onChange(event: any) : void {

    this.amountChangeEvent += 1;

    this.data = event;
    let clone = JSON.parse(JSON.stringify(this.schema));

    clone.properties.subspecies.title = this.amountChangeEvent + " Change Events";

    this.schema = clone;
    this.data = event;

  }

}
