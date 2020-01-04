import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemsProvider } from '../../providers/items.provider';
import { ItemsListItem } from '../../models/items-list-item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss']
})
export class ItemListComponent implements OnInit {

  public itemsList: Array<ItemsListItem>;
  public isLoading = false;
  public isError = false;
  public title = 'Product list';

  constructor(
    private itemsProvider: ItemsProvider,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    const ref: string = this.activatedRoute.snapshot.paramMap.get('ref');
    console.log(ref);
    if (ref) {
      this.title = "Danh mục abc";
    }
    this.isLoading = true;
    this.itemsProvider.getItemsList()
      .subscribe(itemsList => {
        console.log('item is : component', itemsList);
        this.itemsList = itemsList;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.isError = true;
      });
  }

  handleItemClick(item: ItemsListItem) {
    console.log('item clicked is ', item);
    this.router.navigate(['items', item.productId]);
  }

  handleAddToCardClick(item: ItemsListItem) {
    console.log('add item ', item);
  }
}
