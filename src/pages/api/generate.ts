// src/pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { idea } = req.body;
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Generate a TikTok script for: ${idea}` }],
        max_tokens: 150,
      });
      res.status(200).json({ script: completion.choices[0].message.content });
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status);  // e.g. 401
        console.error(error.message); // e.g. The authentication token you passed was invalid...
        console.error(error.code);    // e.g. 'invalid_api_key'
        console.error(error.type);    // e.g. 'invalid_request_error'
      } else {
        console.error(error);
      }
      res.status(500).json({ error: 'Failed to generate script' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
