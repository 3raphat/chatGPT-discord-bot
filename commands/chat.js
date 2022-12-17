const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chat')
    .setDescription('Chat with The Professor')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('What are you wondering?')
        .setRequired(true)),

  async execute(interaction) {
    const prompt = interaction.options.getString('input');
    await interaction.deferReply({ content: "Let me think..." })

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    let responseMessage = '> ' + prompt + response.data.choices[0].text;

    /* If the response is longer than 2000 characters, it will be sent as a file. */
    if (responseMessage.length >= 2000) {
      const attachment = new AttachmentBuilder(Buffer.from(responseMessage, 'utf-8'), { name: 'response.txt' });
      await interaction.editReply({ files: [attachment] })
    } else {
      await interaction.editReply(responseMessage);    
    }
  },
};
