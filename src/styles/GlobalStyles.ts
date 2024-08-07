import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html, body, #root {
      height: 100%;
   }

   *, button, input {
      border: 0;
      outline: 0;
      font-family: 'Poppins', sans-serif;
   }

   button {
      cursor: pointer;
   }

   #printable-content, #printable-content * {
      visibility: visible;
   }
   
   #printable-content {
      position: absolute;
      left: 0;
      top: 0;
   }
`;