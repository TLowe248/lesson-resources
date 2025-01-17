import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOtherOrdersComponent } from './all-other-orders.component';

describe('AllOtherOrdersComponent', () => {
  let component: AllOtherOrdersComponent;
  let fixture: ComponentFixture<AllOtherOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOtherOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOtherOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
