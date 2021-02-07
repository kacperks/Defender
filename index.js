const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4],
  password: process.argv[5]
})

bot.once('spawn', () => {
  setInterval(() => {
      const mobFilter = e => e.type === 'mob' && e.mobType === 'Zombie'
      const mob = bot.nearestEntity(mobFilter)

      if (!mob) return;

      const pos = mob.position;
      bot.lookAt(pos, true, () => {
          bot.attack(mob);
      });
  }, 1000);
});
bot.chatAddPattern(
  /(helo|hello|Hello)/,
  'hello',
  'Someone says hello'
)

const hi =  () => {
  bot.chat('Hi!')
}

bot.on('hello', hi)