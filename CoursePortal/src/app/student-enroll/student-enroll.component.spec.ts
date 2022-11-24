import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollComponent } from './student-enroll.component';

describe('StudentEnrollComponent', () => {
  let component: StudentEnrollComponent;
  let fixture: ComponentFixture<StudentEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
