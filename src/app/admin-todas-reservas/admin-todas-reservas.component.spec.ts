import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTodasReservasComponent } from './admin-todas-reservas.component';

describe('AdminTodasReservasComponent', () => {
  let component: AdminTodasReservasComponent;
  let fixture: ComponentFixture<AdminTodasReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTodasReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTodasReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
