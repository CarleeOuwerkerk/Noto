import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalStartComponent } from './journal-start.component';

describe('JournalStartComponent', () => {
  let component: JournalStartComponent;
  let fixture: ComponentFixture<JournalStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
