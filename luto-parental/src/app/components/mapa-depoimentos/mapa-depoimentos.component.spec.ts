import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDepoimentosComponent } from './mapa-depoimentos.component';

describe('MapaDepoimentosComponent', () => {
  let component: MapaDepoimentosComponent;
  let fixture: ComponentFixture<MapaDepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaDepoimentosComponent]
    });
    fixture = TestBed.createComponent(MapaDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
