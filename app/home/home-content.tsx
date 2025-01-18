'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ConversationInput } from '@/components/conversation-input';
import { SuggestionCard } from '@/components/suggestion-card';
import { getRandomSuggestions } from '@/data/suggestions';
import { useUser } from '@/hooks/use-user';

export function HomeContent() {
  const { user } = useUser();
  const [inputValue, setInputValue] = useState('');
  const [suggestions] = useState(() => getRandomSuggestions(4));

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleSubmit = useCallback(async (value: string) => {
    // TODO: Implement submission logic
    console.log('Submitted:', value);
    setInputValue('');
  }, []);

  const handleSuggestionSelect = useCallback((text: string) => {
    setInputValue(text);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-3xl font-bold"
      >
        Welcome back, {user?.privyUser?.twitter?.username || 'Agent'}!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-lg text-muted-foreground"
      >
        How can I assist you with Solana today?
      </motion.p>
      <ConversationInput
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <AnimatePresence>
        {!inputValue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {suggestions.map((suggestion, index) => (
              <SuggestionCard
                key={suggestion.id}
                {...suggestion}
                delay={index * 0.1}
                onSelect={handleSuggestionSelect}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

