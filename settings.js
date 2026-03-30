
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkJSERHLCAKXlHwAhv7UEIJpdykCgUm/PcN7Onpedid7eWpyMrIPHnOyfoOshwTNEcNUL6DosR3SFF3pE2BgAK06nxGJeiDEFIIFLBWc/uKzauTFeZelNhI8x/BfcWEre3zgVabS2fozkU6nRhv4NkHRXVKcPCbgg9tBIcDydlGJ9YOt87EmFx7i7CKrtbtqJrb5p7VAinOs4P8Bp5dRYhLnEVGEaMUlTCZo8aGuPwa/OV0v1oPKvbiMZeKZ4zxwOQDt7FPvbOZ6kc1iLnjpF046jT/Gvx5iIRrer9JWeWHq43fbnJmxGsnosvyNDbClqkOfirQ1BDe4RMcZSi0QpRRTJsv8471oBkI7lp9MDZ7IEmi3cXebLOfDIPVpHSDBNaevzcG8/3ua8DbdT0sjGhF2o0duwvMPKaD0brkThVeOYt84Opm77QS+EwLfgVulx9euf4f3tOZTOrxIebc6Kj66Zm7LIc6Z7en6ZWlWmZQ/Vwf162THb8IP6CQmrSuLv59CI8e5afb4D4aTqTtqqmWtZZMxMWEjA/YWH7Ch7Qqf4eydzeSlAsK07rAiPhXc+8zN50bTFGNIOv0NlW5aZvME/wNGzxWPBGzE94dXInN+NsE3uewt/fmizFfy0m9tWZeZs6j6O010RU1VggU9tkHJYowoSWkOM+6mCz2AQzvDgpKRF/sgkp9jOOWFcbkkq+3ToN914D2uj6zdJSnPIl23JIOeVylyzfQB0WZB4gQFJqY0LxslogQGCEClD//6oMM1fRdt64bz/bBGZeE7rKqSHIYfoj6cQmDIK8y6jRZoHcHVAKF+QwjSnEWkY7GKoNlEOM70mNICVDOMCHo54CoRCFQaFmhn0ur52HHO+/tZ44pjkAfpC89cAgUwA1FSeBkluFGjMLJf5Bvj64sLIpvGaKgD5JXmjwaShwjjWRJ5kS+S+ziz58Au3ohohAnBChAn6V+VuWGMRuzNyJMp6oRqXqkgs+BPozxzvwmLopZDmubOv7MSc3jGMKJvdS5ubG37gWCrrtxt3nlbHdv/1AEKADNTobBbwXZFNTWq0gwe1SCdhxyPX4THgaD8bLQooF44gJDy6365C2DDey5mtsujGMSlatIG5wOksR5NjnqWpWsZqrauagPQnTHAfq1maeJw91UuuWbYZ6uLz686aG3wehmjlQ3msmWU/qeVjaC9eh56UJccGXDC9Z2yqnxLhUXvsyuHSvjZMLMB7db6EK/jR/vln2tTPLjqcIvN3VSdb9njF6bn8FOwP+W7h145zDm2f+lxo+35F/2UdtZEDpwSlxplzq7ImYfXBq7rUpxPHEW4jG9MozBwMX1ugfP5199UCSQnvMyBQqAWVjmOAR9UOZVZ1krO+e/aaarjKWrkdNNnkBC1c81cHGKCIVpARRWkgR5xEsc+55ll3lhQhJ3rk4T9uJ0nm7UonAopB9bBdTuW1YOeP4N0346n3AHAAA=';
const dev = process.env.OWNER_NUMBER || '+256742810290';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙, 💚, 💜, 💖, 💗, 💓, 💕, 💋, 💞, ❤️, 💝, 🖤, 💟, 💘, 😘, 😍, 😚, 😙, 👋, 🎄, 🎈,❣️,🙏 ';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "Keith";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/9zqj7g.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "KEITH-MD";
const botPackname = process.env.BOT_PACKNAME || "KEITH-MD";
const botMode = process.env.BOT_MODE || "private";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
