import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestletersComponent } from './testleters.component';

describe('TestletersComponent', () => {
  let component: TestletersComponent;
  let fixture: ComponentFixture<TestletersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestletersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestletersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
