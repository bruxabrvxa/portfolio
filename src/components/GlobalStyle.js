import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* reset and normalize */
  ${reset}
  ${normalize}

  /* gatsby 100% */
  div[role="group"][tabindex] {
    height: 100%;
  }
  html, body, #___gatsby {
    height: 100%;
  }


  body {
    /* @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'); */
    font-family: 'Montserrat', sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  p, ul, li {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  h1 {
    line-height: 1.3em;
  }

  h2 {
    font-size: 1.5em;
  }

  a {
    display: inline-block;
    color: ${p => p.theme.color.black};
    font-weight: 500;
    transition: all .2s;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      color: ${p => p.theme.color.black};
    }
  }
  &.bg {
    color: ${p => p.theme.color.white};
    &:hover {
      color: ${p => p.theme.color.gray};
    }
    &:visited {
      color: ${p => p.theme.color.white};
    }
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }

  .sidebar {
    max-width: 300px;
  }

  b, strong {
    font-weight: 700;
  }

  i, em {
    font-style: italic;
  }

  /* blockquote */

  blockquote {
    padding-left: 15px;
    border-left: 5px solid ${p => p.theme.color.darkgray};
    font-style: italic;
  }

  /* LISTS */

  ul, ol {
    li {
      padding-left: 25px;
      position: relative;
      line-height: 1.2em;
      &:before {
        font-weight: 700;
        top: -1px;
        left: 5px;
        position: absolute;
        color: ${p => p.theme.color.color};
      }
    }
  }

  ul {
    li {
      &:before {
        content: '\\203A';
      }
    }
  }

  ol {
    li {
      counter-increment: step-counter;
      &:before {
        content: counter(step-counter) '.';
      }
    }
  }

  /* Changing prism styles */
  .gatsby-highlight {
    margin: 50px 0;
  }
  pre[class*="language-"] {
      &:before,
      &:after {
        content: none;
      }
      & > code {
        border-color: ${p => p.theme.color.color};
        box-shadow: none;
        background-color: ${p => p.theme.color.white};
        background-image: none;
      }
    }
`;

export default GlobalStyle;
