import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAccountAdminComponent } from './creat-account-admin.component';

describe('CreatAccountAdminComponent', () => {
  let component: CreatAccountAdminComponent;
  let fixture: ComponentFixture<CreatAccountAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAccountAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
