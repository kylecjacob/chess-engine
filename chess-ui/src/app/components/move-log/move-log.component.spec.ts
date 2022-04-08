import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveLogComponent } from './move-log.component';

describe('MoveLogComponent', () => {
  let component: MoveLogComponent;
  let fixture: ComponentFixture<MoveLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
