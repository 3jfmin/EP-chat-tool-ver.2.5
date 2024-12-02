import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../firebase";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messagesArray = querySnapshot.docs.map((doc) => doc.data());
        setMessages(messagesArray);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (input.trim() === "") return;
    try {
      await addDoc(collection(db, "messages"), { text: input });
      setInput("");
      const querySnapshot = await getDocs(collection(db, "messages"));
      setMessages(querySnapshot.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Chat</h1>
      <div>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((message, index) => <p key={index}>{message.text}</p>)
        )}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
