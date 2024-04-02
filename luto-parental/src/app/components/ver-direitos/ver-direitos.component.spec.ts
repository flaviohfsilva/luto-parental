import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDireitosComponent } from './ver-direitos.component';

describe('VerDireitosComponent', () => {
  let component: VerDireitosComponent;
  let fixture: ComponentFixture<VerDireitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerDireitosComponent]
    });
    fixture = TestBed.createComponent(VerDireitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
