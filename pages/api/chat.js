export default async function handler(req, res) {
    const { messages } = req.body;
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          temperature: 0.7,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('OpenAI API Error:', data);
        return res.status(500).json({ error: 'Failed to fetch AI response.' });
      }
  
      return res.status(200).json({ message: data.choices[0].message.content });
    } catch (error) {
      console.error('Server Error:', error);
      return res.status(500).json({ error: 'Server error occurred.' });
    }
  }
  