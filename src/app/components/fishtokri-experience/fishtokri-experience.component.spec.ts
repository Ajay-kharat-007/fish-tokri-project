import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishtokriExperienceComponent } from './fishtokri-experience.component';

describe('FishtokriExperienceComponent', () => {
  let component: FishtokriExperienceComponent;
  let fixture: ComponentFixture<FishtokriExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishtokriExperienceComponent]
    });
    fixture = TestBed.createComponent(FishtokriExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
