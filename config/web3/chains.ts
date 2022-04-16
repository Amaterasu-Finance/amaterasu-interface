
enum ChainID {
  AuroraMainnet = 1313161554,
  HarmonyMainnet = 1666600000,
  HarmonyTestnet = 1666700000
}

const BASE_AURORA_SCAN_URLS = {
  [ChainID.AuroraMainnet]: 'https://aurorascan.dev/',
  [ChainID.HarmonyMainnet]: 'https://explorer.harmony.one',
  [ChainID.HarmonyTestnet]: 'https://explorer.pops.one'
};

const BASE_AURORA_SCAN_URL = BASE_AURORA_SCAN_URLS[ChainID.AuroraMainnet];

const BASE_URL = 'https://amaterasu.finance';

export {
  ChainID,
  BASE_AURORA_SCAN_URL,
  BASE_AURORA_SCAN_URLS,
  BASE_URL
};
