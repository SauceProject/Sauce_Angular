import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngrediantsComponent } from './recipe-ingrediants.component';

describe('RecipeIngrediantsComponent', () => {
  let component: RecipeIngrediantsComponent;
  let fixture: ComponentFixture<RecipeIngrediantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngrediantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeIngrediantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
