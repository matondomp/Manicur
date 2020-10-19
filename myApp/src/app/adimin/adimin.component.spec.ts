import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiminComponent } from './adimin.component';

describe('AdiminComponent', () => {
  let component: AdiminComponent;
  let fixture: ComponentFixture<AdiminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdiminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
