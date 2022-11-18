import * as sdk from '../../sdk/sdk';

import config from './manta-config.json';
const chain_url = config.BLOCKCHAIN_URL_LOCAL;

export async function init() {
    const signer = "5FHT5Rt1oeqAytX5KSn4ZZQdqN8oEa5Y81LZ5jadpk41bdoM";  
    const api = await sdk.init_api_config(chain_url);

    const { wasm, wasmWallet } = await sdk.init_wasm_sdk(api, signer);

    await sdk.getPrivateAddress(wasm, wasmWallet);
}

init();