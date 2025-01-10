import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodosComponent } from './edit-todos.component';

describe('EditTodosComponent', () => {
  let component: EditTodosComponent;
  let fixture: ComponentFixture<EditTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
