import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McontentComponent } from './mcontent.component';

describe('McontentComponent', () => {
  let component: McontentComponent;
  let fixture: ComponentFixture<McontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
