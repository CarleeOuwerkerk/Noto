import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowbackDetailComponent } from './throwback-detail.component';

describe('ThrowbackDetailComponent', () => {
  let component: ThrowbackDetailComponent;
  let fixture: ComponentFixture<ThrowbackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrowbackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowbackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
