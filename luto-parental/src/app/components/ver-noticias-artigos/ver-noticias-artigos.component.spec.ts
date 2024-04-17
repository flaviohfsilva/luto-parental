import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNoticiasArtigosComponent } from './ver-noticias-artigos.component';

describe('VerNoticiasArtigosComponent', () => {
  let component: VerNoticiasArtigosComponent;
  let fixture: ComponentFixture<VerNoticiasArtigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerNoticiasArtigosComponent]
    });
    fixture = TestBed.createComponent(VerNoticiasArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
