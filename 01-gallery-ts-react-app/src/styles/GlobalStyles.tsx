import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
    
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }

      h1 {
        text-align: center;
      }
    `}
  />
  )
  
};

export default GlobalStyles;
