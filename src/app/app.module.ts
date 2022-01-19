import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieBookComponent } from './recipie-book/recipie-book.component';
import { RecipieListComponent } from './recipie-book/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipie-book/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie-book/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { AppBetterDirective } from './directives/better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieBookComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppBetterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
