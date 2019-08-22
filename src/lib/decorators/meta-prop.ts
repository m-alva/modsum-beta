import "reflect-metadata";
import { MetaPropOptions } from '../interfaces/meta-prop-options';
import { MetaPropKey } from '../symbols/meta-prop.symbol';

export function MetaProp(value: MetaPropOptions) : any {
  return (target: object, key: string | symbol) : any => {
    // tslint:disable-next-line: no-expression-statement
    Reflect.metadata(MetaPropKey, value)(target, key);
    // tslint:disable-next-line: no-let
    let propertyStore = target[key];
    // tslint:disable-next-line: no-expression-statement
    Object.defineProperty(target, key, {
      get:() => {
        return propertyStore;
      },
      set: (value: any) => {
        // tslint:disable-next-line: no-expression-statement
        propertyStore = value;
      },
      // tslint:disable-next-line: object-literal-sort-keys
      enumerable: true,
      configurable: true
    });
  }
}