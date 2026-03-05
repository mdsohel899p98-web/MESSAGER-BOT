const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰Rahat Islam🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━┓
┃ 🌟𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎🌟
┣━━━━━━━━━━━━━━━━┫
┃👤𝐍𝐀𝐌𝐄      :𝐌𝐃 𝐒𝐔𝐌𝐎𝐍 𝐈𝐒𝐋𝐀𝐌
┃🚹𝐆𝐄𝐍𝐃𝐄𝐑    :𝐌𝐀𝐋𝐄
┃🎂𝐀𝐆𝐄       :𝟏8
┃🕌𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝐈𝐒𝐋𝐀𝐌
┃🏫𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 :𝐀𝐒𝐇𝐔𝐋𝐈𝐘𝐀.𝐒𝐀𝐕𝐀𝐑
┃🏡𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :𝐃𝐇𝐀𝐊𝐀 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇
┣━━━━━━━━━━━━━━━━┫
┃𝐓𝐈𝐊𝐓𝐎𝐊 :𝐘𝐎𝐔𝐒 𝐊𝐑𝐈 𝐍𝐀
┃📢𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 :𝐕𝐏𝐍 𝐊𝐈𝐍𝐆 𝐒𝐔𝐌𝐎𝐍
┃🌐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :𝐌𝐃 𝐒𝐔𝐌𝐎𝐍 𝐈𝐒𝐋𝐀M
┣━━━━━━━━━━━━━━━━┫
┃🕒𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐓𝐈𝐌𝐄 :${time}
┗━━━━━━━━━━━━━━━━┛`,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://imgur.com/a/4SBWl3A.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};