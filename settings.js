
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVGLnIRSM6YgEBAUERsNWNfSihhJJrQ4HihP++gT09PQ+7s708FVkZWSdPnpPfQVHiBlmoB/PvoKpxBwkajqSvEJgDuT2fUQ3GIIIEgjmYStFi1nNrYbSSO9j1d9FeXnXzNV/tkokOy4MYhSIvYZimL+AxBlV7ynD4m4L0SdLY5vxm+tecccNYcxDDhWd907KW5W7U+4SDq0Ul33TqBTyGihDXuIjVKkE5qmFmoX4Dcf01+Fi73OVMnpomIbOVFDu2u81HK4VmdWZ9yd9yoZjQ3o2aZsbX4N/XSx+xN6eVucVrIMaXTiNmwMiXkqHf3kI6RFq5W6QbRbq+w29wXKDIiFBBMOm/zLsiWVt1y2SlxyWsnHH7Cam1bRem4i1f3kYbvst1lqHKJi+/BlxoDsbuNX/VY3Xtu5zvrsXWjqOixXKkUik32V/U2cHRT4H6K/BN/aGV9P/wTunrkOO3MqU5Ajx3S1530qVU34/mLOHU6+1Ye2orHi1Wt78GX7my/sEeCcVbMA0I9kcXlJHz6Mh6+xEteTSvqLZTrsrFa/AJH5K2/h3KLR3sbfGgLX0dFam1SF2rbUZ2fpIDU1mz4s6KVjxveLt+KeYGdfAlT7+cXp1b7sDEzTTzormTDE2MxusirGzJdbKQ3ZdnRynqjQjM6ccY1CjGDakhwWUxxMQxgFHnobBG5EkuuE39ViVQdI4xFSe26WwUV9uwOLiK66hzFuu4XR7Kk86l7gsYg6ouQ9Q0KFrihpR1b6OmgTFqwPzPv8agQDfyPrbhMZYegzOuGxIUbZWVMPqY6cclDMOyLYjXF6EyHFAN5tRnGBGCi7gZWGwLWIcJ7pCSQNKA+RlmDfrZH6pRBOakbtFPzyplNNCuacfDdrUUwRjkz3HgCMwBw/HClBFpiplRc5b/o/l2HcrCqvpWIALGIHumiTNOYChhJgoiw7ND4hB//AQ41IsQgThrBpmY+bFoS1W1kEjbU12X0lhSYgl8NvShi3fm3aSqzBLeNsQ7ml6+3C8g1Da2wljqzugqBH3f9bdl622Dl38oAuagk09wqfKGesmVJuP664orrveIIYbC8Hkh4Cqtii6imn4a18gtU6Uk15G3NpFoeBIid86/U+pkQ5NpJ+3QNuhdRhlENAYR6nCIfn3MlvdCcjy11KZeBc5ZLrkkSTnBNBWHN5dV3yhMZY1a9/LG0IzBaQc8C9P4Novq5rDXd6OFYConK5vpWaVbItu69UxX4nfFPh2T/dhU+KmmYVTD7xmjp/ELOAzwv0f3DnxQGPUY/1Ljxyr5FzvKgQGhB/XGF4LcC6qEvjJ54t8lghPNW/H7PKUolYKrNN2Bx+OvMagySM5lnYM5gEVUlzgCY1CX7SBZoziXv12wlKFIsTd0nsGGSJ828HGOGgLzCsxpQeA4YcpT1HvWpi6rJWwSMAdsntEXb9B0L1WVRyD5cBWQhs9uffD4GwT+68lvBwAA';
const dev = process.env.OWNER_NUMBER || '+256742810290';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙, 💚, 💜, 💖, 💗, 💓, 💕, 💋, 💞, ❤️, 💝, 🖤, 💟, 💘, 😘, 😍, 😚, 😙, 👋, 🎄, 🎈,❣️,🙏 ';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "RYAN";
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
