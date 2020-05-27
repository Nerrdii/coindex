const KeyManager = require('../lib/key-manager');
const CryptoAPI = require('../lib/crypto-api');

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = check;
