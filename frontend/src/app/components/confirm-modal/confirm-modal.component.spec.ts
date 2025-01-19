import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarModalComponent } from './confirmar-modal.component';

describe('ConfirmModalComponent', () => {
  let component: ConfirmarModalComponent;
  let fixture: ComponentFixture<ConfirmarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
