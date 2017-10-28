"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botkit_1 = require("botkit");
let controller = botkit_1.slackbot({
    debug: true
});
controller.spawn({
    token: 'xoxb-259095812673-NFXQbcNfxYXSMUFYYrVhaZHV'
}).startRTM();
controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, 'Hello yourself.');
});
//# sourceMappingURL=app.js.map