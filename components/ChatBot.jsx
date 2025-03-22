'use client';

import styles from '../styles/ChatBot.module.css';
import { useState } from 'react';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newChat = [...chat, { role: 'user', content: message }];
    setChat(newChat);
    setMessage('');

    setChat((prev) => [...prev, { role: 'bot', content: 'Typing...' }]);

    setTimeout(() => {
      const botReply = generateAIResponse(message);
      setChat((prev) => [
        ...prev.slice(0, -1), // remove 'Typing...'
        { role: 'bot', content: botReply },
      ]);
    }, 1000);
  };

  const generateAIResponse = (input) => {
    const msg = input.toLowerCase().trim();
  
    if (
      msg.includes('fusion') && 
      (msg.includes('what') || msg.includes('score') || msg.includes('meaning'))
    ) {
      return 'FusionScore is a unified credit metric derived from multiple credit bureaus like Experian, Equifax, and TransUnion. It ranges from 300 to 850, with 720+ being excellent.';
    }
  
    if (
      msg.includes('how') && msg.includes('apply') && msg.includes('loan')
    ) {
      return 'To apply for a loan, ensure your FusionScore is above 650, maintain a steady income, and gather documents like ID proof, income statements, and bank history.';
    }
  
    if (
      msg.includes('credit') && msg.includes('points')
    ) {
      return 'Credit points reflect different components of your score — like payment history, credit utilization, and age of credit. They all add up to form your FusionScore.';
    }
  
    if (
      msg.includes('i am 18') ||
      msg.includes('just 18') ||
      (msg.includes('no credit') && msg.includes('how'))
    ) {
      return 'Since you’re 18 and just starting out, you can build credit by applying for a secured credit card, getting a student credit card, or becoming an authorized user on someone else’s card.';
    }
  
    if (
      msg.includes('no') && msg.includes('credit score')
    ) {
      return 'No worries! You can start building credit by using a secured credit card or credit-builder loan. Always pay on time and monitor your usage to grow your score.';
    }
  
    if (
      msg.includes('improve') || msg.includes('boost') || msg.includes('increase')
    ) {
      return 'To improve your score, pay bills on time, reduce credit utilization below 30%, and avoid opening too many new accounts quickly. A good history builds trust.';
    }
  
    if (
      msg.includes('which bureaus') || msg.includes('data source') || msg.includes('credit bureau')
    ) {
      return 'We use data from Equifax, Experian, and TransUnion — the top three credit bureaus — to build a unified, balanced score called FusionScore.';
    }
  
    if (
      msg.includes('eligibility') && msg.includes('loan')
    ) {
      return 'Loan eligibility depends on your FusionScore, income, debt-to-income ratio, and recent payment history. A score above 650 improves your chances.';
    }
  
    if (
      msg.includes('faq') || msg.includes('help') || msg.includes('what can i ask')
    ) {
      return 'You can ask me things like:\n- What is FusionScore?\n- How can I build credit at 18?\n- How do I apply for a loan?\n- What affects my credit score?\n- How to improve my score?';
    }
  
    // Default fallback
    return 'I’m still learning to answer that. Try asking about FusionScore, credit-building tips, loan application steps, or how to improve your credit score.';
  };
  
  
  const suggestions = [
    '💡 What is my FusionScore?',
    '💡 How do I apply for a loan?',
    '💡 How can I improve my credit score?',
    '💡 What credit bureaus are used?',
    '💡 Am I eligible for a personal loan?',
  ];

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {chat.map((msg, index) => (
          <p key={index}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </p>
        ))}
      </div>

      <div className={styles.inputRow}>
        <input
          className={styles.chatInput}
          type="text"
          placeholder="Ask about your FusionScore, loan eligibility, etc."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Try asking:</strong>
        <ul>
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatBot;
