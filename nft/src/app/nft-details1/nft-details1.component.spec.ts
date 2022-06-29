import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDetails1Component } from './nft-details1.component';

describe('NftDetails1Component', () => {
  let component: NftDetails1Component;
  let fixture: ComponentFixture<NftDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
