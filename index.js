import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8541799005:AAHooq6hfOaFVPOg7uXzLtgdPVI9MhdfCP0";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("massage", async function (msg) {
    const chatId = msg.text;
    const firstname = msg.chat.first_name;
})