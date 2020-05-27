import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifIntComponent } from './tarif-int.component';

describe('TarifIntComponent', () => {
  let component: TarifIntComponent;
  let fixture: ComponentFixture<TarifIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
