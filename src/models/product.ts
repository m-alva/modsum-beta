import { Model } from "../lib/model";
import { Brand } from "./brand";

export class Product extends Model {
    public readonly name: string;
    public readonly price: number;
    public readonly cost: number;
    public readonly brand: Brand;
    constructor(
        name,
        price,
        cost
    ) {
        super();
        this.name = name;
        this.price = price;
        this.cost = cost;
    }
}