import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMadeRecipeComponent } from './home-made-recipe.component';

describe('HomeMadeRecipeComponent', () => {
  let component: HomeMadeRecipeComponent;
  let fixture: ComponentFixture<HomeMadeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMadeRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMadeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
