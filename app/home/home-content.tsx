'use client';

import { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ConversationInput } from '@/components/conversation-input';
import { SuggestionCard } from '@/components/suggestion-card';
import { getRandomSuggestions } from '@/data/suggestions';
import { useUser } from '@/hooks/use-user';

export function HomeContent() {
  const { user } = useUser();
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const suggestions = useMemo(() => getRandomSuggestions(4), []);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleSubmit = useCallback(async (value: string) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      // Replace this URL with the actual API endpoint or handling logic
      const response = await fetch('/api/submit-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: value }), // Send the input value to the server
      });

      if (!response.ok) {
        throw new Error('Failed to submit query');
      }

      const result = await response.json();
      console.log('Submission success:', result);

      // Reset input field after successful submission
      setInputValue('');
    } catch (err) {
      console.error('Error during submission:', err);
      setError('An error occurred while submitting your query. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  }, [isSubmitting]);

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
        aria-live="polite"
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
        aria-label="Enter your query"
      />
      
      {/* Display error message if any */}
      {error && <div className="text-red-500 mt-4">{error}</div>}

      <AnimatePresence>
        {!inputValue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            role="list"
          >
            {suggestions.map((suggestion, index) => (
              <SuggestionCard
                key={suggestion.id}
                {...suggestion}
                delay={index * 0.1}
                onSelect={handleSuggestionSelect}
                aria-label={`Select suggestion: ${suggestion.text}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Display loading spinner if submitting */}
      {isSubmitting && (
        <div className="mt-4 text-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
