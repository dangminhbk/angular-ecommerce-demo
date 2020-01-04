export class ItemsListItem {
  cost: number;
  image: string;
  label: string;
  color: string;
  category: string;
  categoryId: string;
  productId: string;
  constructor(inputObj) {
    console.log(inputObj);
    if (inputObj) {
      this.cost = Number(inputObj.price);
      this.image = inputObj.image || 'https://picsum.photos/200';
      this.label = inputObj.name;
      // this.color = inputObj.color;
      this.category = inputObj.category || 'Chưa phân loại';
      // this.categoryId = inputObj.categoryId;
      this.productId = inputObj.id;
    }
  }
}
