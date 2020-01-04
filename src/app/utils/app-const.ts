export class AppConst {
  public static readonly STORE_API_PATHS = {
    getItems: '/api/products',
    itemDescription: '/api/products/{{id}}',
    getCategories: '/api/productCategories',
    buyItems: '/people',
    verfiyVoucher: '/people'
  };

  public static readonly DEFAULT_CURRENCY_SYMBOL = '£';

  public static readonly VOUCHER_CODES = {
    OFF5: '5OFF',
    OFF10: '10OFF',
    OFF15: '15OFF'
  };
}
