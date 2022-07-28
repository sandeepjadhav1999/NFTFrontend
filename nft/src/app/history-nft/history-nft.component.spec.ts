import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNftComponent } from './history-nft.component';

describe('HistoryNftComponent', () => {
  let component: HistoryNftComponent;
  let fixture: ComponentFixture<HistoryNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
