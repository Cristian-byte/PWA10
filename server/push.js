
const fs = require("fs");
const urlsafeBase64 = require("urlsafe-base64");
const vapid = require("./vapid.json");
const webpush = require("web-push");
const suscripciones = require("./subs-db.json");

webpush.setVapidDetails(
  "mailto:andygign40@gmail.com",
  vapid.publicKey,
  vapid.privateKey
);

module.exports.getKey = () => {
  //return vapid.publicKey;
  return urlsafeBase64.decode(vapid.publicKey);
};

module.exports.addSubscription = (suscripcion) => {

    suscripciones.push(suscripcion);

    fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );
};

module.exports.sendPush = (post) => {

    suscripciones.forEach( (suscripcion, i) => {

        //webpush.sendNotification( suscripcion , post.titulo );
        webpush.sendNotification(suscripcion, JSON.stringify(post));

    });

};