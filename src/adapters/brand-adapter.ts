import { ModelAdapter } from '../lib/model-adapter';
import { Brand } from '../models/brand';
import { ProviderAdapter } from './provider-adapter';

export class BrandAdapter extends ModelAdapter {
    defaultIncludes = [];
    optionalIncludes = []
    adapter(data) {
        return new Brand(
            data.name,
        );
    }
    provider(data) {
        const provider = data.provider;
        return { data: provider, adapter: new ProviderAdapter}
    }
}