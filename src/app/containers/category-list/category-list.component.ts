import { Component, OnInit } from '@angular/core';
import { ItemsProvider } from 'app/providers/items.provider';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryListItem } from 'app/models/categories-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public itemsList: Array<CategoryListItem>;
  public isLoading = false;
  public isError = false;
  public title = 'Product list';

  constructor(
    private itemsProvider: ItemsProvider,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.itemsProvider.getCategoryList()
      .subscribe(itemsList => {
        console.log('item is : component', itemsList);
        this.itemsList = itemsList;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.isError = true;
      });
  }

  handleItemClick(id: string) {
    // console.log('item clicked is ', item);
    // this.router.navigate(['items', item.productId]);
  }

  // handleAddToCardClick(item: ItemsListItem) {
  //   console.log('add item ', item);
  // }

}
