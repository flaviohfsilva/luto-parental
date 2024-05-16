import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueFazemosComponent } from './oque-fazemos.component';

describe('OqueFazemosComponent', () => {
  let component: OqueFazemosComponent;
  let fixture: ComponentFixture<OqueFazemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OqueFazemosComponent]
    });
    fixture = TestBed.createComponent(OqueFazemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
