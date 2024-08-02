import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: "sk-proj-0mAudTIJViFmFxw4Cj9kT3BlbkFJVupUk6RZBI2hghjr63kq",
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message) {
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.choices[0].message.content;
}