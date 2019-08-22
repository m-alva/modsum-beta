import { ModelAdapter } from "./model-adapter";
import { Model } from "./model";

export class FractalAdapter {
    private fractalKeys: Array<string>
    constructor() {
    }
    public parseIncludes (fractalKeys: Array<string>) {
        this.fractalKeys = fractalKeys;
    }
    public getEntity<T>(data: any, modelAdapter: ModelAdapter) : T {
        let modelEntity = modelAdapter.adapter(data);
        for (const ambit of this.fractalKeys) {
            const keys = ambit.split('.');
            if (keys.length) {
                getAdapters(modelEntity, modelAdapter, data, keys);
            } else {
                getAdapters(modelEntity, modelAdapter, data, [ambit]);
            }
        }
        return modelEntity as T;
    }
}

function getAdapters(modelEntity: Model, modelAdapter: ModelAdapter, data: any, ambit: Array<string>) {
    if (ambit.length) {
        const parseInclude = ambit.shift();
        const childAdapter = modelAdapter[parseInclude](data);
        const childModel = childAdapter.adapter.adapter(childAdapter.data);
        getAdapters(childModel, childAdapter.adapter, childAdapter.data, ambit);
        modelEntity[parseInclude] = childModel;
    }
}