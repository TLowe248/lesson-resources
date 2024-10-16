import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-other-orders.component.html',
  styleUrl: './all-other-orders.component.css'
})
export class AllOtherOrdersComponent {
	@Input() orders: number[] = [];
}
