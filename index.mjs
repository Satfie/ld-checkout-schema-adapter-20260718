import { runtimeVersion } from 'checkout-schema-runtime';

export function adapterStatus() {
  return `checkout-schema-adapter-ready:${runtimeVersion}`;
}
