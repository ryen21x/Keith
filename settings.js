
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU246jOBD9F78mmhBuCUgtLblCbgTIhWQ1DwYbYu5tDAkZ5d9XpKe7Z6Xd2V6eTLlUdeqcU/4BspyUeIkboP4ABSU1ZLg9sqbAQAWjKggwBV2AIINABdz6Rsgr9M4Zd7u+Tgy7F3VG+e3mnKerzcq9aNbIyLPbNeHiF/DogqLyEuL/pmCOLTdg11GoR7OTnCncacJ4tEPStAiq7HJamDDZnwvmcNYLeLQVIaEkC6fFBaeYwmSJmy0k9Gvwp3OXvDKhsgWuOsDIGaYd4VTZbKMkl4VRHYhANThwt7Ygfg3+UpEP+2Q1ZWE+4Q/8+j4VpKSURLa545uh2BxFRmbFmZiKb/BLEmYYGQhnjLDmy7zzE2Fhply+LyT9xByuHxfzGKfLQWdIN6Z0r3dDz2zshT7nvgZ8UaN7Gr7KkXUNl8Z5VAxn447h8U7vYvQiI9qj6770dmLt/A34lr57Jf4/vGvLRrHg2bhH68DMol68MTfGPOmt02LjnWYK8i7RzTvpx8T/GnxNTqoRvtKtPMV9zVrMadCp3MlS0gtz5JGzz10aiZZ6cb9+woesor9DuZvptoWkUJJTW9P8aREEQVxPmnxhSKfRGXKdrXDEJ6GKbA/FngZD1FSdkTDiXahQSa7Fy/y8EU852t6EOgteabaLrJfnRDFuDATU/qMLKA5JyShkJM+eMakLIKod7FPMnuyCq2d6s5TrOQs0kVq365NKXztFX98t8NT3hLV1qlYrx3fFF9AFBc19XJYY6aRkOW3WuCxhiEug/vm9CzJ8Y2+6td2EfhcEhJZsn1VFkkP0Lur7JfT9vMqY02T+uD1gClTuM4wZI1lYtjRWGaT+hdR4fIGsBGoAkxJ/DIgpRkBltMIfSzvO0ZN3R+MscXIGXZA+9SCotbgkD0R+2Od4hVN5+Y/y27UtC4viW4YZ6ILkmTZUpAHPDZThYMjLQpvYxh8fANt6CDNIkhKoYLza3gdiPp6u8bjwxfl8ZITaONTA50Dvxnhjnh92uKGYRXLVRL0+Fu3J8Xa0Ld6NT3t7x5euUaccOwbno//yD0WACoLZCiKtc7h6tEp3vqtUglTNMaQzLFuu7AiJeaJBupVrM17ux4P6EHWWV22ZS72gPifkNfL02I39fLnqeNUle93ywSR8abshXBMf/9qsv/e3FNmCGS9tzO/EcHUslLu3r6+dWa8XI5ODrrmOpza9H7bDxUGXbD2erBR3R5bngSVMhs2V+HMpn9XVYrLuD5Hdu2hvln2uTPLzqSJPN7VStb8Bwc/Nz2Ar4H9L9wa8dRj36P5S4+db8i/7OEL1lm3NhdihZd5T3Gpq9ctDvN8k0nw23St01qwktjpk/CEDj8f3LigSyIKcpkAFMEM0Jwh0Ac2r1rJGFuS/aTbWOGOshU47eQJLpn2uwY6kuGQwLYDaHwzEgTLoC/Jb1pbmhQ7LC1CBkCb9yGk93WhF4TDI3rcKaO1nHvrg8Rf8kaUCcAcAAA==';
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
