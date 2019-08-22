import "reflect-metadata";
import { MetaPropOptions } from  '../interfaces/meta-prop-options';
import { MetaPropKey } from '../symbols/meta-prop.symbol';

type MetaclassDescriptor<T> = {
    [P in keyof T]?: MetaPropOptions;
};

export function createDescriptor<T>(instance): MetaclassDescriptor<T> {
  return new Proxy(new instance(),{
    get: (target, key) => {
      return Reflect.getMetadata(MetaPropKey, target, key as string);
    }
  });
}