import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDUsuariosComponent } from './crud-usuarios';

describe('CrudUsuarios', () => {
  let component: CRUDUsuariosComponent;
  let fixture: ComponentFixture<CRUDUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
