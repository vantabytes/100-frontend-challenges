import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FC001TarjetaPresentacionComponent } from './fc001-tarjeta-presentacion.component';

describe('FC001TarjetaPresentacionComponent', () => {
  let component: FC001TarjetaPresentacionComponent;
  let fixture: ComponentFixture<FC001TarjetaPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FC001TarjetaPresentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FC001TarjetaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
