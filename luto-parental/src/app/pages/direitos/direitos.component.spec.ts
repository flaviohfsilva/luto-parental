import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitosComponent } from './direitos.component';

describe('DireitosComponent', () => {
  let component: DireitosComponent;
  let fixture: ComponentFixture<DireitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireitosComponent]
    });
    fixture = TestBed.createComponent(DireitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
