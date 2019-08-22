import { Model } from "../lib/model";
import { Provider } from "./provider";

export class Brand extends Model {
    public readonly name: string;
    public readonly provider: Provider;
    constructor(
        name
    ) {
        super();
        this.name = name;
    }
}