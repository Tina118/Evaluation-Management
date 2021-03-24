import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllevaluationComponent } from './allevaluation.component';

describe('AllevaluationComponent', () => {
  let component: AllevaluationComponent;
  let fixture: ComponentFixture<AllevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
