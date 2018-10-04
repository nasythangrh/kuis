import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulirComponent } from './formulir.component';

describe('FormulirComponent', () => {
  let component: FormulirComponent;
  let fixture: ComponentFixture<FormulirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
