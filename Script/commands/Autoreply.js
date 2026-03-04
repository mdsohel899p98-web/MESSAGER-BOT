const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "🔰𝐑𝐀𝐇𝐀𝐓 𝐈𝐒𝐋𝐀𝐌🔰",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস রাহাদ রে হাঙ্গা করো😶👻😘",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "help": "Prefix de sala",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "Sumon": "তোর বস হয় সুমন নাম বলিস কেন😤",
    "সুমন": "বুঝলাম না আমি থাকতে আমার বস কে ডাকো কেন☺️",
    "🙄🙄🙄": "সুমন বস তো নিছে আছে ঔপরে দেখো কেন😒",
    "tor bal": "~আজকে ইউটিউব এ দেখলাম বাল দিয়েও কেক বানানো যায়🫠😗",
    "sumon": "উনি এখন মেয়ে নিয়ে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!🫩🙏",
    "singel": "‎তুই না কালকে দরা পরলি পার্কে🐸",
    "Sm": "সেম সেম করিস কেন তোর কি ওর মতো বিছানায় হিসু করস🤣🥶.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "assalamualaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "আসসালামু আলাইকুম": "ওয়ালাইকুম আসসালামু",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস সুমন রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মুতার জায়গায় গুতা দেওয়ার ধান্দা😑",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "আমি সুমন": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS  🔰SUMON BOT🔰",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "cudi": "খারাপ কথা বলিস না কেউ..!🥱🌝🌚",
    "bal": "বেশি বড়ো হলে কেটে ফেল🫩🫩🙏",
 "শালা আমি সুমন": "ভুল হয়ছে বস😩মাফ করে দাও🙏💩",
 "আমি সুমন": "আরে বস😮 তুমি এই গ্রুপে কী করো",
 "sumon ka chudi": "তোর তো নুনুই নাই 🐸😂 চু*বি কীভাবে 💩",
 "Ss time adda box": "রমজান মাস তাই আমাদের সিও সস টাইম অফ রাখছে রমজান মাস শেষ হলে আবার শুরু😘",
 "Khanki": "গালাগালি কেউ করো না😘",
 "তোর মারে চুদি": "আল্লাহ'তালা তোমার হেদায়ত দান করুক❤️‍🩹",
 "murgi": "কাউকে murgi দেস না😩মরে যাবো তো🐸",
 "মাফ চা": "🥹বস আমাকে মাফ করে দাও প্লিজ 🙏",
 "Mudic band ss time": "রমজান মাস Ss টাইমের থেকে গুরুত্বপূর্ণ কাজ রোজা রাখা নামাজ পড়া😘❤️‍🩹",
 "Chudi": "তোর তো নুনুই নাই 🐸😂 চু*বি কীভাবে",
 "শালা চুপ কর": "ওকে সুমন বস😗",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 😛",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে সুমন boss এর ইনবক্সে গুতা দিন😘",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈"
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};