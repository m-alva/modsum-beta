import { Model } from './model';

export abstract class ModelAdapter {
    abstract optionalIncludes:Array<string>;
    abstract defaultIncludes:Array<string>;
    abstract adapter(data: any) : Model;
}