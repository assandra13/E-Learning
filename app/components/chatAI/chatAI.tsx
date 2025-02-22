"use client"; // Pastikan komponen ini dijalankan di sisi client

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./ChatAI.module.css";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ChatAIProps {
  onClose?: () => void; // Prop untuk menangani penutupan chat
}

const ChatAI = ({ onClose }: ChatAIProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk scroll ke bawah saat pesan baru ditambahkan
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Panggil API route untuk Hugging Face
      const response = await axios.post("/api/huggingface", { message: input });
      const aiMessage: Message = { text: response.data.reply, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Failed to get response from AI.", sender: "ai" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Tombol Close */}
      {onClose && (
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      )}

      {/* Chat Window */}
      <div className={styles.chatWindow} ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className={styles.message}>Loading...</div>}
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} disabled={isLoading} placeholder="Type a message..." />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAI;
