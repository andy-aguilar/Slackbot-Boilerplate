import getHeadlines from 'headlines';
require('dotenv').config({path: __dirname + '/.env'})

const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

/* Add functionality here */
app.event('app_mention', async ({ event, context, client, say }) => {
  if (event.text) {
    const [ command, data ] = event.text.split(' ');

    switch (command.toLowerCase()) {
      case 'headlines':
         
        break;
    
      default:
        break;
    }
  }
  await say(`Hello, <@${event.user}>! 🎉 It works!`);
});

(async () => {
  // Start the app
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();
