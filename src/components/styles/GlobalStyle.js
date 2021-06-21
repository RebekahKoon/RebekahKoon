import { createGlobalStyle } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --lightGray: #D1D7E0;
    --lightGrey: #D1D7E0;
    --gray: #afb6bf;
    --lightGray: #afb6bf;
    
    /* --darkPurple: #2A1B3D;
    --darkBlue: #161B40;
    --charcoal: #2D283E;
    --purple: #802BB1;
    --lavendar: #E98074;
    --pink: #D83F87;
    --olive: #A4B3B6; */

    /* --mint: #A1C3D1;
    --lilac: #B39BC8;
    --offWhite: #F0EBF4;
    --pink: #F172A1;
    --hotPink: #E64398; */

    --darkBlue: #24305E;
    --darkerBlue: #161B40;
    --blue: #374785;
    --lightBlue: #A8D0E6;
    --orange: #F76C6C;
    --yellow: #F8E9A1;
    --maxWidth: 1140px;
  }
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    background: var(--white);
    color: var(--black);
    font-size: 16px;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    color: var(--black);
  }

  h2 {
    font-size: 3rem;
    line-height: 1rem;
    color: var(--gray)
  }

  hr {
    display: flex;
    width: 100%;
    margin-top: 2.5rem;
    margin: 1rem 0rem 3rem 0rem;
    border: 1px solid var(--lightGray);
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: var(--white);
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 150ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 150ms ease-in;
  }
`
export default GlobalStyle
