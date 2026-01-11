import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
  pageBg: {
    value: '#F7FAFC'
  },
  
  accentPurple: {
    light: { value: '#667eea' },
    dark: { value: '#764ba2' },
  },
  
  text: {
    heading: { value: '#2D3748' },
    body: { value: '#4A5568' },
    muted: { value: '#718096' },
    subtle: { value: '#A0AEC0' },
  },
  
  border: {
    light: { value: '#E2E8F0' },
    input: { value: '#E2E8F0' },
  },
  
  status: {
    preparing: {
      bg: { value: '#ECC94B' },
      text: { value: '#744210' },
    },
    inProgress: {
      bg: { value: '#4299E1' },
      text: { value: '#FFFFFF' },
    },
    completed: {
      bg: { value: '#48BB78' },
      text: { value: '#FFFFFF' },
    },
  },
  
  card: {
    bg: { value: '#FFFFFF' },
  },
  
  white: {
    value: '#FFFFFF'
  },
  black: {
    value: '#000000'
  },
});