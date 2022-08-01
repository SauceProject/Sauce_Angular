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
  userId:string=this.acc.getCurrentUserId();

  constructor(    private fav: favServices,
    private recipeService: RecipeServices,
    private acc: AccountServices) { }

  ngOnInit(): void {
    this.show();

  }
  show() {
    this.fav.GetFav().subscribe((res) => {
      this.FavtItem = res.data.data;
      //console.log(res.data.data)
      //console.log(this.FavtItem);
      this.GetRecipeNames();
      this.GetRecipeImages();

    });
}
GetRecipeNames() {
  this.FavtItem.forEach((element) => {
    console.log(element)
    this.fav
      .GetRecipeById(element.recipe_ID)
      .subscribe((res) => {
        //console.log(res);
        (element.recipe_Name = res.data.nameEN)
        
      });
  });
}
GetRecipeImages() {
  this.FavtItem.forEach((element) => {
    console.log(element)
    this.fav
      .GetRecipeById(element.recipe_ID)
      .subscribe((res) => {
        console.log(res);
        (element.recipeImg = res.data.imageUrl)
        
      });
  });
}
remove(FavID: number,recipe_ID:number) {
  this.fav.RempveFav(FavID,this.userId,recipe_ID).subscribe((res) =>{ 
    console.log(res);
    this.show()});
}

}
