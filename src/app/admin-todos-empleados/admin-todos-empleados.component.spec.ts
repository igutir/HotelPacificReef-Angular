import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTodosEmpleadosComponent } from './admin-todos-empleados.component';

describe('AdminTodosEmpleadosComponent', () => {
  let component: AdminTodosEmpleadosComponent;
  let fixture: ComponentFixture<AdminTodosEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTodosEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTodosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
