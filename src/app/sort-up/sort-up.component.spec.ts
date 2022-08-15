import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUpComponent } from './sort-up.component';

describe('SortUpComponent', () => {
  let component: SortUpComponent;
  let fixture: ComponentFixture<SortUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
