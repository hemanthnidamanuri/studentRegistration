import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPractiseComponent } from './bootstrap-practise.component';

describe('BootstrapPractiseComponent', () => {
  let component: BootstrapPractiseComponent;
  let fixture: ComponentFixture<BootstrapPractiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPractiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
