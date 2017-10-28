import { slackbot } from 'botkit'

let controller = slackbot({
    debug: true
})

controller.spawn({
    token: ''
}).startRTM()


controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello yourself.')
});

