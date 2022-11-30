import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body { height: 100%; }

:root{
    --transition: all 3s linear; 

  
    
}

*,
::after,
::before {
  /* if padding added, width of element won't increase */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
