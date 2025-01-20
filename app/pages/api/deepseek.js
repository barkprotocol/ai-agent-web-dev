import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DEEPSEEK_API_URL}/chat`,
      { prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}