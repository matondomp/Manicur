import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelgenerateComponent } from './excelgenerate.component';

describe('ExcelgenerateComponent', () => {
  let component: ExcelgenerateComponent;
  let fixture: ComponentFixture<ExcelgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelgenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
