import yVaultV2 from "./abi/yVaultV2.json";

// Main config file for common parameters
export default Object.freeze({
  ubidai: {
    // route path
    TITLE: "UBI DAI",
    LOGO: "💧🔥",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x8EBd041213218953109724e60c9cE91B57887288",
    WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    WANT_SYMBOL: "DAI",
    COINGECKO_SYMBOL: "DAI",
    VAULT_DEV: "emilianobonassi",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
});
