import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderDashboardComponent } from "./order-dashboard/order-dashboard.component";
import { FirstFiveOrdersComponent } from "./first-five-orders/first-five-orders.component";
import { AllOtherOrdersComponent } from "./all-other-orders/all-other-orders.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderDashboardComponent, FirstFiveOrdersComponent, AllOtherOrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson-resources';

  orders: number[] = [];
  started = false;

  orderCreator: any = 0;

  start() {
	this.started = true;
	this.orderCreator = setInterval(() => {
		this.addOrder();
	}, 2000);
  }

  addOrder() {
	if (this.started) {
		this.orders.push(this.orders.length + 1);
	}
  }
}
