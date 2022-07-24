import { Component, OnInit } from '@angular/core';
import { AccountServices } from 'src/app/Services/Account';
import { addfav, favServices } from 'src/app/Services/Fav';
import { RecipeServices } from 'src/app/Services/RecipeServices';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  FavtItem: addfav[] = [];

  constructor(    private fav: favServices,
    private recipeService: RecipeServices,
    private acc: AccountServices) { }

  ngOnInit(): void {
    this.show();
  }
  show() {
    this.fav.GetFav().subscribe((res) => {
      this.FavtItem = res.data.data;
      this.GetRecipeNames();

    });
}
GetRecipeNames() {
  this.FavtItem.forEach((element) => {
    this.fav
      .GetRecipeById(element.recipe_ID)
      .subscribe((res) => (element.recipe_Name = res.data[0].nameEN));
  });
  //console.log(this.CartItem);
}
remove(FavID: number) {
  this.fav.RempveFav(FavID).subscribe((res) => this.show());
}

}
