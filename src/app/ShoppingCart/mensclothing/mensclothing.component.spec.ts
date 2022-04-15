import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothingComponent } from './mensclothing.component';

describe('MensclothingComponent', () => {
  let component: MensclothingComponent;
  let fixture: ComponentFixture<MensclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensclothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
