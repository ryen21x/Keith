
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2ZKiSBT9lYl81WhkkcWIimgWRUtZFPeJeUghxVQ2MxMFOvz3Cayqrn6Y6anhKUmIc88959z7A2Q5pmiKajD4AQqCb5Ch9sjqAoEBMMrjERHQBRFkEAzAatzZ0VtH0Bs080baXpxNVe4CK+qrnCZtylhrNMfD0VZwXsCjC4rykODwN4COfZjPT0o5W8ymc4Xm2i4/0RmX8Vr6uqDDwpdWK72ECl6tXsCjRYSY4CweFieUIgKTKap9iMnX6IfD2k/qSlkc+rCzZLTSO5W1CdZDKdid2U0c27P5GGMfbtWv0W9oQ3HDBUTsBKjKoONZFUV+r6qb5Yx6Wr05NweGd5Y5fKNPcZyhaBKhjGFWf1l304Vw6ArbiS536DTOVcnb8fFQg6fVghl7tbS8oVMe15v0i8TxSkqJn19Col1vkTGvGO9dHPk8KeXK3V15i5df96i4k8D5lbhPPrJy+T+6Ixerbpn3IpvuNzfbpjKks2Ay9UdO0D9U+Slw3KLZwnikf40+1Kd6Dbd8bTo272wW6iK4a6YzD/d1eXMnx6awuZpyQ17QP+lDVpLfsdyguzj0zjc3V/RAKaBiKvHiehG5Qu2LvaW25apG96x+epU3ZwltNoR0lra7w5ukkHbjfqVdbaXOcOoelbXXk48SZ53jl2dHF1RPIjDgH11AUIwpI5DhPHve9bsARrcAhQSxp7qgCXMx4qVzFS06clK8dmbkNj8JZ2oJUuL0udORWd6x5vSz8wK6oCB5iChF0RhTlpPaQZTCGFEw+POvLshQxd58a6uJQhccMaFslZVFksPow9SPjzAM8zJjQZ2FZntABAx6n9eIMZzFtJWxzCAJT/iGzBNkFAyOMKHoZ4OIoAgMGCnRz6E186jVfTVbW5ZjaKAL0qcfOAIDIPRlRZAFgRd4fqB9p9/uLSosim8ZYqALkudfvCD2FVESRLXXk9WB9r297oIMtkhgUcPsDyMpUSv5O+O2QIQYxAltB+l1y/hIGg9nvqloE9vWh7Fuxjr47PAjKW9W+JGim2VhReupl8rLu2dc5FjF/FjwIn0/Ta1rKRLnogm6/vIPIGAARoKZXA5W5BSaBrl6qqUnxX3t8IKthvvtWKGBMQ9uTZX1ayqFSYVPVd+7jq4nQ/S4fbj3JpvxzoqMwnbWVkmsobuzjPtLWy1CNxyiX4uVi7y8GwV3uBpujeC9QaHm1OtZL/b9sc9cfJEPDjfx9lKo58uwPzbFA/MNfWReL2csinVslR5ejd10PoKvhXIwExTP3zL8nKHkfXfhZ7xa79rXI0bPVfDuw395+ca7TVzv0f0F4n23/Mt8GksR3XVynYvr4FyUF9WK917uT9hCO2dzOyhimTC5efWjWAePx19dUCSQHXOSthsji0j+zArJyzbCk+yY/27j6quJNY+DtvEEUqZ/jsUSp4gymBZgwCuqJPVkUex3QVrrRREwyD6mCejtM9N24PE3ZmjcPWgHAAA=';
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
