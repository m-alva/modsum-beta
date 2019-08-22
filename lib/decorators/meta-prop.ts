import { MetaPropKey } from '../symbols/meta-prop.symbol';
import { MetaPropOptions } from '../interfaces/meta-prop-options';

export function MetaProp(value: MetaPropOptions) {
  return function(target: Object, key: string | symbol) : any {
    Reflect.metadata(MetaPropKey, value)(target, key);
    let propertyStore = target[key];
    Object.defineProperty(target, key, {
      get:() => {
        return propertyStore;
      },
      set: (value: any) => {
        propertyStore = value;
      },
      enumerable: true,
      configurable: true
    });
  }
}