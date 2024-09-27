import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

export const theme = {
  colors: {
    primary: '#6c63ff',
    secondary: '#00dac6',
    background: '#ffffff',
    text: '#333333',
    lightGrey: '#e0e0e0',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  borderRadius: '8px',
};