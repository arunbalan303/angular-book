import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoComponent } from './leo.component';

describe('LeoComponent', () => {
  let component: LeoComponent;
  let fixture: ComponentFixture<LeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
