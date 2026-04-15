
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW5OiOBT+L3nVGrnItaqrNogX1EZAwMvWPqQhYBQDQlBhyv++hT0907VVO9vLU0hS53znu+Q7oDmp8AI3QP8OipJcEcPdkjUFBjow6iTBJeiDGDEEdNAzB2nKD8RMcJArlce3xowpHBt7BkenXjEPtNUize/xILy9gEcfFPVbRqLfFDxKHrLuVs/cyQVlWyM6hCdymSy8lblk0Nxq9mJH55c0gPkLeHQVESkJTcfFAZ9xibIFbhxEyq/Bv5nloqGkWaxO2owbjtdzlZ/i+NTD7mJSOOHtoHGGyQvbmfo1+PI03JCl0IqVq7bxPFy2k0UVi8zjtGvYW2an9SisVvFFPt7e4VckpTi2YkwZYc2XeZ869+aazmaSckPbK+9bnnCsxou9fbCwuGcZHfeGB68N5YD7GvDh9Tip8jaYI6KVu/30fPaJiBymNtSwDp6FZH/DiO8Tb/cZuFN+eOX0f3i/TE1um5LbRjMVb3ATaq2+H8LXaKLxezEljm+eXk/BJK8F92vwByFXWiN+LPUSG0avtJXn1MeTpjbT+44r7MarfdjWN2J84h2xuvwdSkvzhVG9Su6Tc7sb1os92jumhK28HdxFzQncFXKzJbvs26Nan6XF1ltyY9cY7Lf0fJltzGxS3wMviQj1b/UF93au7UD48pzohBsrBjr/6IMSp6RiJWIkp889TekDFF/XOCoxe9IL6rvNUjEoDHUxyVaXa+ykbrO6pepE9E+VGvRyO/Q20/RQn15AHxRlHuGqwvGMVCwvm1dcVSjFFdD//KsPKL6zd+G6diLfBwkpKxbQushyFH+o+nGIoiivKVs3NBp1C1wCnfu1jRkjNK06HmuKyuhArnh0QKwCeoKyCv+cEJc4Bjora/wztaM87ohXZWU8hVABfXB+CkJioANBkpWhxMmiLPI6r/1Rfbt1ZVFRfKOYgT7IntdUWeEETRlKqqyJSnex23/8BNjVizFDJKuADkar9fUSq9OxVbKBOpxOoZvCUQrBr4E+nPHOfMNjce/yHsRQcI8TqPaIsZ6rQlioo0xzdoc5rKnr7YX2yfw/iwAdcMHSeJPEyetaOfbgjLbBYCCEb9shHkaxW9CCVnKIMK8haRymfDtip7mnXLSYOOpbEVck6e2T4jBMVvVyLVIpI+oGpi9dtxhfSYQ/N7sqEKaCdTCOg/sJ5jSf2YzslcJIpDkbL9nSE+GroeF0uhyv35JRUGwFJaouvqQ2x+zeDu1NEpSz9TRMd7Um2BVHTeP27tlnZrIfbxV5uqmTqvtNCH5Gn6JOwP+W7h145zDu0f9U48dj8i+BNCK2ZUJgB+4stU/W3XWcPA1IYmcogUXiC9baXRbceBNXEng8/uqDIkMsycsz0AGicZmTGPRBmdedZS2a5L9pNoKWZbip3U2eoYrBXzHwyRlXDJ0LoPOKIguqJIrDPjg3sCjWDLGP9ADYfcZWA4+/AcYh731ZBwAA';
const dev = process.env.OWNER_NUMBER || '+256742810290';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙, 💚, 💜, 💖, 💗, 💓, 💕, 💋, 💞, ❤️, 💝, 🖤, 💟, 💘, 😘, 😍, 😚, 😙, 👋, 🎄, 🎈,❣️,🙏 ';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "RYAN";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/PsZnb9NH/0d81ac6b1fb1.jpg";
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
