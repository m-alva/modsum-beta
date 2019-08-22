
import { Product } from "../models/product";
import { Brand } from "../models/brand";
import { Provider } from "../models/provider";
import { ProductAdapter } from "../adapters/product-adapter";
import { FractalAdapter } from "../lib/fractal-adapter";
import FractalTestJson from '../json/fractal-test';

export function testModel() {
  const fractal = new FractalAdapter();
  fractal.parseIncludes(['brand.provider']);
  const modelo: Product = fractal.getEntity(FractalTestJson, new ProductAdapter());

  return {
    modelo: modelo,
    instanceOfProduct: modelo instanceof Product,
    instanceOfBrand: modelo.brand instanceof Brand,
    instanceOfProvider: modelo.brand.provider instanceof Provider
  };
}
