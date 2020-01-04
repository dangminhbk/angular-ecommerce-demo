export class CategoryListItem {
    label: string;
    id: string;
    constructor(inputObj) {
      console.log(inputObj);
      if (inputObj) {
        this.label = inputObj.name;
        this.id = inputObj.id;
      }
    }
  }