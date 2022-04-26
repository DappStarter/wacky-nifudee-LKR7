require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture street cruise oil prosper grace civil army gasp'; 
let testAccounts = [
"0xe3c4b6ae431f6b6544b06f670344a8d11a9e0504d2a5430facf12771cc11c074",
"0x0679a0745f18a5d45d49a19cb979e8cd7a044cb64843ba82260e21adf2af6655",
"0xf051dec57f2cf6c44b5cf0808c9cd79ee7eef7658f4b5d3d68517c3f9f9977cd",
"0xb18cee9237e19ea00e38164e0538be95fc8279b24a9bf47c90b92d96effeddc6",
"0xcaa3e1e60f0f51075ef74635ead3bd28d7085e21d1a90e0b1720a8119a6eeb7a",
"0xba04f11502934657fd4912a1fe280c3a9d2e93f3638f82c2047c376a793d676d",
"0x0cad537b5fbedd5b37e4bedc690fec497488618fd2cf4841b7044067816ca50a",
"0x20b99bdbbc771cafae7a975b890520d213e5f593e867ad3ae0cd0bf884ee2ae9",
"0x9844460caf1f1e0299606d0d2d2813f60ce70a8a005006a0de916182677ed72d",
"0x057b9ab5ccc78b8700bf96a9493793ecbb12e540e44f387bfa19135aaeeedbc2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

