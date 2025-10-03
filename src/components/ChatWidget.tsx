import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--accent-blue)] rounded-full shadow-lg z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <i className="fas fa-comment text-white text-xl"></i>
      </motion.button>

      <AnimatePresence>
        {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

const ChatModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Message sent:", message);
      setMessage("");
      alert("Thanks for your message! We'll get back to you soon.");
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className="fixed bottom-20 right-6 w-80 bg-[var(--primary-bg)] border border-[var(--card-border)] rounded-lg shadow-xl z-50"
    >
      <div className="p-4 border-b border-[var(--card-border)]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Chat with Autolinium</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              We'll reply quickly!
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            Hi! How can we help you today?
          </p>
          <div className="space-y-2">
            <button
              onClick={() =>
                setMessage("I'd like to know more about your pricing")
              }
              className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
            >
              💰 Get pricing information
            </button>
            <button
              onClick={() => setMessage("I want to start a new project")}
              className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
            >
              🚀 Start a project
            </button>
            <button
              onClick={() =>
                setMessage("I have a question about your services")
              }
              className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
            >
              ❓ Ask a question
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="w-full button bg-[var(--accent-blue)] hover:bg-[var(--accent-deep-teal)]"
            disabled={!message.trim()}
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatWidget;
