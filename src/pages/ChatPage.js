import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebase";

function ChatPage() {
  const db = getFirestore(app);

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        text: "Hello World!",
        timestamp: new Date(),
      });
      console.log("Message sent!");
    } catch (e) {
      console.error("Error adding message: ", e);
    }
  };

  return (
    <div>
      <h2>Chat Page</h2>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default ChatPage;
