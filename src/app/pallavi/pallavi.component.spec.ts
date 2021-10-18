import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PallaviComponent } from './pallavi.component';

describe('PallaviComponent', () => {
  let component: PallaviComponent;
  let fixture: ComponentFixture<PallaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PallaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PallaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
