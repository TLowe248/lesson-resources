import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './order-dashboard.component.html',
  styleUrl: './order-dashboard.component.css'
})
export class OrderDashboardComponent {
	@Input() orders: number[] = [];
	@Input() started = false;
	@Output() start = new EventEmitter();
	@Output() stop = new EventEmitter();
}
