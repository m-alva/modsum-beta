import { Model } from "../lib/model";

export class Provider extends Model {
    public name: string;
    public address: string;
    constructor(
        name: string,
        address: string,
    ) {
        super();
        this.name = name;
        this.address = address;
    }
}