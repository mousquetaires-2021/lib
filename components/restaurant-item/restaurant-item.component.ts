import { Component, Input, OnChanges } from "@angular/core";
import { RestaurantInferface } from "lib/interfaces/restaurant-interface";
import { MainClass } from "lib/libs/main-class";

@Component({
  selector: "restaurant-item",
  templateUrl: "./restaurant-item.component.html",
  styleUrls: ["./restaurant-item.component.scss"],
})
export class RestaurantItemComponent extends MainClass implements OnChanges {
  @Input() restaurant: RestaurantInferface;
  type: string = "";
  constructor() {
    super();
  }

  ngOnChanges() {
    if (this.restaurant.type) {
      this.type = this.restaurant.type.split(",").join(" ,");
    } else {
      this.type = "";
    }
  }
}
