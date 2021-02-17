import { Telegraf } from 'telegraf'
import { getHaiku } from './detector.js'
import { token } from './config.js'

const app = new Telegraf(token)

app.command('start', (ctx) => {
   ctx.reply('Welcome!')
})

app.on('text', async (ctx) => {

  const haiku = getHaiku(ctx.message.text)
  if (!haiku) return

  const first_name = ctx.message.from.first_name
  const last_name = ctx.message.from.last_name
  let suffix = `-- ${first_name}`
  if (typeof last_name !== 'undefined'){
    suffix = suffix + ' ' + last_name
  }


  ctx.reply(`${haiku}\n\n${suffix}`)

})

app.startPolling()
