import { ModelAdapter } from '../lib/model-adapter';
import { Provider } from '../models/provider';

export class ProviderAdapter extends ModelAdapter {
    defaultIncludes = [];
    optionalIncludes = []
    adapter(data) {
        return new Provider(
            data.name,
            data.address,
        );
    }
}