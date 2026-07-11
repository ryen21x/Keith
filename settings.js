
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBT8l3rFmAZRbhEdMaCCgPfWFtyYhxIKKOVmVQHihP++gT3dPQ+7s708FQciT57MPPUT5AWmyEUt0H6CkuAaMtQdWVsioAGjiiJEQA+EkEGgAck5jTwzs44J0uk8WHrBOuWkBTcLRkuxCg9qSfFxGkRGOnkG9x4oq2OKgz8AMr9JKnpeJtkkKYMczzkvU1ArJWbDVX489YZIvXH74ywZPIN7hwgxwXk8KROUIQJTF7UriMkX6a9c/azAxqCbs32cLovxQXitV4E9EqOsccKyWPezaSHu9l+kvyFbM54bA8eWTtdZsz9UMatlcTaq7ap4pfxRENbkSVROu+aNPsVxjkI7RDnDrP2y7tVcn0+JpFLDlUfF4cXkldUpYyvX2W72t2t8adqngTs1LoL+NeIpPKSGuts7nF1Dk25Txbs40UxReD3fn53LyB97M+dpN/T034mvyHtWzv9Hd8tVImYW7tSAt0tLzJOzXCo2MbjA3GyS85CfP4VjQVd8j36N/mBB/GaZt0pjrETnavrMq/R50eJt3RxVeJqu5ts42QTRevJJH7KK/Inlbpd7ew5mi9hw3HpssSaY10Sa0TW3sqTmtFwOxqk7OSx3V730yLrKEv6ylik1nxxLRhedXI+SurVWG3+IPSgPeNEcr58fE51Ra4dAE+49QFCMKSOQ4SLvan1e7QEY1i8oIIg95AXmxvU4CmOHEk+I7Vq8MpxFuSqpPA9RaDszK54pjmt1fvdASYoAUYrCKaasIO0cUQpjRIH2148eyNGVvRnXtROFHogwoWyXV2VawPDd1fePMAiKKmcvbR6MugMiQOM/y4gxnMe007HKIQkSXKNRAhkFWgRTij4mRASFQGOkQh9bOyrCTnh1MBMXa9cCPZA9DMEh0EB/KMl9qd8X+oKgKd/pt6ZDhWX5LUcM9ED6+Evoi0NZHPRFheclRVO+d+X7B70OLUQM4pQCDYycLRPCwXTiuvs2tC1Ln8T6KNbB5zjvuXjTfZVNt7ngWapPlaGzHm4mtxC/GLKckDrNk9OMfxINcbs56efnfwABGsBhokRmPGbDV//MN7XBWYea8nWktrTIZCnJ3XFaXMtg55U3r8Jy0JZCf3YLi3lJhYJSKwgTfTXdOVBfxG1QhPPxI0Q9EKIaB+j3ZssjPZdBwylRFqrbXObseYFtX8qm/uFkqN4lNryM9ulhXTqvs5t+s9xoWCcn/XCy5INrmou+mG3WrKY+XUz5IrhuTb15S+xjY9JfNxV+ZKkzqnuNMHosfg47+/7TuDfeXbz4e+83iF83yb9so7EdJvxQfb3W+9lq+bJb7jZz0T/HiBtAeXgY+K26UpuQ5/3GAff7jx4oU8iigmRAAzAPSYFD0AOkqLq82nlU/KHZSN/Z43X80g2eQsr0zx3Y4gxRBrMSaIKsiLKs8OqwB7JWL8sXBtn76gC9e8axA+5/A/4Wa6BWBwAA';
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
