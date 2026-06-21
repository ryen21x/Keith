
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW5OiOBT+L3nVGhEElKquWkQExOYiXtCtfUhDwMjVEFCY8r9vYU9Pz8PubC9PIUmd853vku8gL3CFTNQC6TsoCW4gRf2StiUCEpjXUYQIGIIQUggkUJkqKqba2UFNLJ/U5jJTDnQZKfLG4tbpdQ392+j1sG6KpfwCHkNQ1m8pDn5T0FyiqVmwIz1pko26ygYiexj4wuI63R/ss6vO0lEaVfrrSalewKOvCDHBeayWZ5QhAlMTtQ7E5GvwjTVvaTMjycVrgHfKTDejDetok411GYirO1E5+dgI2ZjP1a/B97W3uc/y8mWbzEO+FLaJfDtODu3+XG+L4FLP2+AWe6OJkOze4Vc4zlFohCinmLZf5t20KeuSWTHrplVV8udX3xMHi+oIbSNPV11HSRLlIU6Jn3wNeKpso8jEVjm5+rvY5LhcreF4+7YxF03RzuW5sakKfecy2PgVuEM+vJL8H949GSfdynbUQ2JtboklVttL6C2jZGvky/nViJttqtQDqu2Mr8Fn0rS7TbhrgLhuZqjq6XVAJqN1HhoCtkgWl8nhVe+YN18vPuFDWpPfoYwqX2/drBQ7u6jHHmeeVqf7wcmOYYc8HPDWukDHLD66TOOVs+DY7Zuxl67a+KpfPGox232n6k7XHkfWfpVtC+rhVr69PCdKUGuEQBo/hoCgGFeUQIqL/Lk3BDBsPBQQRJ/kgnOd8MjInaN+YOzO0++lXBq7q7vOoyK2RUE7L1FrL1dHJXgBQ1CSIkBVhUIdV7Qg7SuqKhijCkh//jUEObrTd9n6Ztx4CCJMKrrL6zItYPih6cchDIKizqnX5oHSLxABEvO5jSjFeVz1LNY5JMEZN0g5Q1oBKYJphX7OhwgKgURJjX5mVinCnnZPZzjT4aZgCLKnHDgEEmB5QZzwjMAJ3Fhi+T+qb7e+LCzLbzmiYAjS57WpIDLsTJzwU2HGif3Ffv/xE2BfL0QU4rQCElBs2FzDqabaijGxVE2TjVhWYhl8DvThi3fm2zHiTu54IyOZdS9LeTrAc281ZfflVElnzvG8kuvc3ZzYLnn5hyJAAporp0Jzbjfl2ua90g4FTah5snG8zVhsdK/TrqPFJDs2o+5y16xgNCAnQzC3KL6L+zoTLm+DYCl2m9r2x1ZhaUc/Os7dl75biBocoF+bheP4ZI/nCz9aKKxDilZltwO73rB1Y10MnsXBxKzVA7tr5aZ1MvkusK6M5mgfOgkbnE5rs/EEevHPg1vzpgyipbsiC/fdsc/EpD9eKvx0Uy9V/xth9Ax+DnsB/1u6d+C9w5jH8JcaP56Sf4njPKA+ZXfWztVjKzHuruMU8Q5HVgojuYy2rOG565JRD2HFg8fjryEoU0ijgmRAAjAPSYFDMASkqHvLGnlU/KaZIleGGsdWP3kKKyp/xmCLM1RRmJVAGotTluEFZsIPQdbKZelRSD/SA+T+W5cUPP4G2YLLd1cHAAA=';
const dev = process.env.OWNER_NUMBER || '254748387615';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '🫟,🫟';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.OWNER_NAME || "Keith";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/PsZnb9NH/0d81ac6b1fb1.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "KEITH-MD";
const botPackname = process.env.BOT_PACKNAME || "KEITH-MD";
const botMode = process.env.BOT_MODE || "private";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";
const autosocialdownload = process.env.AUTO_SOCIAL_DOWNLOAD || "false";

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
  autosocialdownload,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
