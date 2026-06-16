import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurant } from './create-restaurant';

describe('CreateRestaurant', () => {
  let component: CreateRestaurant;
  let fixture: ComponentFixture<CreateRestaurant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRestaurant],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRestaurant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
