import React, { useState } from 'react';
import Card from './Card';
import { Box, Text, Button } from '@chakra-ui/react';

export default function SavedPosts() {
  const [savedPosts, setSavedPosts] = useState(Object.keys(localStorage));

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setSavedPosts(savedPosts.filter(postKey => postKey !== key));
  };

  return (
    <div className="post-cards-container">
      {savedPosts.length === 0 ? (
        <Text align="center" fontSize="lg" fontWeight="bold" mt="4">
          There are no items added yet.
        </Text>
      ) : (
        savedPosts.map(key => (
          <Card key={key} data={{ name: key, value: localStorage.getItem(key) }} onDelete={() => handleDelete(key)} />
        ))
      )}
    </div>
  );
}
