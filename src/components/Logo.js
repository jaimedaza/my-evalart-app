import React from 'react';
import { Image } from '@chakra-ui/react';

export const Logo = props => {
  return (
    <Image
      src="https://cdn.evalart.com/wp-content/uploads/2016/11/logo.png"
      {...props}
    />
  );
};
