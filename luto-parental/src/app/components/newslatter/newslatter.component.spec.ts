import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslatterComponent } from './newslatter.component';

describe('NewslatterComponent', () => {
  let component: NewslatterComponent;
  let fixture: ComponentFixture<NewslatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewslatterComponent]
    });
    fixture = TestBed.createComponent(NewslatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
