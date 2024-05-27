import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --text: #FEF7FF;
  --font:"Ubuntu", "sans-serif";
  --persian-font:"Rubik";
  --border:rgba(90,24,154,0.5);
  --title:#9D4EDD;
  --background-secondary:rgba(254,247,255,0.05);
  --button-text:#FEF7FF;
  --background-color:#070012;
  --primary: #5A189A;
  --orange:#ffc14d;
  --Pastal-Blue: #00caff;
}
.DARK {
}
.fa{
  --font:"Rubik" !important;
  direction:rtl ;
}
.ar{
  --font:"Rubik" !important;
  direction:rtl ;
}
body,
html {
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
*{
  color: #fff;
 box-sizing:border-box ;
 font-family : var(--font),sans-serif,system-ui, -apple-system,'Helvetica Neue',"Rubik";
}
`;
//COLUMN

export const ROW = `
  display: flex;
  flex-direction: row;
`;
export const COLUMN = css`
  display: flex;
  flex-direction: column;
`;
const CENTER = css`
  align-items: center;
  justify-content: center;
`;
export const COLUMN_CENTER = css`
  ${CENTER}
  ${COLUMN}
`;
export const ROW_CENTER = `
  ${CENTER}
  ${ROW}
`;
export const COLUMN_JUSTIFY_END__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: center;
`;
export const COLUMN_JUSTIFY_START__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`;
export const COLUMN_ALIGN_END__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_START__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_END__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_CENTER__SPACE_B = `
  ${COLUMN}
  justify-content:space-between;
  align-items: center;
`;

// ROWS

export const ROW_JUSTIFY_END__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-end;
  align-items: center;
`;
export const ROW_JUSTIFY_START__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`;
export const ROW_ALIGN_END__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-start;
`;
export const ROW_ALIGN_START__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ROW_ALIGN_END__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__SPACE_B = `
  ${ROW}
  justify-content:space-between;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`;
export const ROW_ALIGN_CENTER__SPACE_B = `
  ${ROW}
  justify-content:space-between;
  align-items: center;
`;
export const FULL_WIDTH = css`
  width: 100%;
`;
export const FULL_HEIGHT = css`
  height: 100%;
`;
export const UNSELECTABLE = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const BUTTON = `
  ${UNSELECTABLE}
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export default GlobalStyle;
