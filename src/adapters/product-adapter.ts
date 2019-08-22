import { ModelAdapter } from '../lib/model-adapter';
import { Product } from '../models/product';
import { BrandAdapter } from './brand-adapter';

export class ProductAdapter extends ModelAdapter {
  defaultIncludes = [];
  optionalIncludes = []
  adapter(data) {
      return new Product(
          data.name,
          data.price,
          data.cost
      );
  }
  brand(data) {
      const brand = data.brand;
      return { data: brand, adapter: new BrandAdapter()};
  }
}