import { defineGlobalStyles } from '@chakra-ui/react';

// В safari есть проблема с отображением градиента на фоне, поэтому добавляем псевдоэлемент

export const globalCss = defineGlobalStyles({
  'html, body': {
    height: '100%',
    width: '100%',
  },
  body: {
    background: 'pageBg',
  },

});
