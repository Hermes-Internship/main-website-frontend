import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdMemberComponent } from './cd-member.component';

describe('CdMemberComponent', () => {
  let component: CdMemberComponent;
  let fixture: ComponentFixture<CdMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
