import { MetaProp } from '../lib/decorators/meta-prop';

import { createDescriptor } from '../lib/operators/meta-descriptor';

import { Model } from '../lib/model';

class Product extends Model {
  @MetaProp({dbname: 'a'}) a: String = "valor";
  @MetaProp({dbname: 'b'}) b: Number = 1234;
}

export function testMeta() {
  const productDescriptor = createDescriptor<Product>(Product);

  const graph = [
    productDescriptor.a.dbname,
    productDescriptor.b.dbname,
  ];
  return graph; 
}