import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCalendarComponent } from './entry-calendar.component';

describe('EntryCalendarComponent', () => {
  let component: EntryCalendarComponent;
  let fixture: ComponentFixture<EntryCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
