require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind exchange gloom arctic surge genuine'; 
let testAccounts = [
"0x1633d38d96a06e64f819b6d88bf8476d55f55126b1b1a716fd978124656fad57",
"0x9fb98121e59927e60c8f036fae4e8fede82eaf2c80b4b46699b6f8cab71a77f1",
"0x1ab71a06c1318306761cd593b63464d24de3aa6e7a24fea7430935c45ee7f943",
"0xa34bfcf479f35660f0169aa1b7c977df96698dba2ac39b1390452d14a54789dd",
"0x0b7ed89a9f8788619e2b5b8fd91a99e546e11e6ab02f3db8f40615b13f90c3d8",
"0xcfbcdbbf0f700492b399f6439141402d6971e6240b8313482c0a0e5e2c5618ef",
"0x1710fec76315c9618ac7ffae510b3bef95edb70cd0633ab87d1a2c08eab23fb2",
"0x48ab5f47d9e2ef6384cf14fd3f706fff7ab27a17a71b09446b85e4ddbde1a12f",
"0x92c6729527cc04a829e07a4591e2c80f252451babfe7a7158b908db6905fc001",
"0xaa1a995c86b120e47df624983c58619f8def4c20794c2c2e8b5770a92de07fed"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


