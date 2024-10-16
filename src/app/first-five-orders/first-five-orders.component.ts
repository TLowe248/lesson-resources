import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-five-orders',
  standalone: true,
  imports: [],
  templateUrl: './first-five-orders.component.html',
  styleUrl: './first-five-orders.component.css'
})
export class FirstFiveOrdersComponent {
	@Input() orders: number[] = [];
}
