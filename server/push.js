
const urlsafeBase64 = require("urlsafe-base64");
const vapid = require("./vapid.json");

module.exports.getKey = () => {
  //return vapid.publicKey;
  return urlsafeBase64.decode(vapid.publicKey);
};