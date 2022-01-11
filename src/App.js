import "./styles.css";
import styles, { ThemeProvider } from "styled-components";
import Button from "./Button";
import TextArea from "./TextArea";
import Input from "./Input";

const H1 = styles.h1((props) => {
  return `
  background-color: ${props.theme.primaryColor};
  `;
});

const H2 = styles.h2((props) => {
  return `
    background-color: ${props.theme.secondaryColor};
  `;
});
H2.defaultProps = {
  theme: {
    secondaryColor: "green"
  }
};

const theme = {
  primaryColor: "purple",
  secondaryColor: "red"
};

const invertTheme = ({ primaryColor, secondaryColor }) => ({
  primaryColor: secondaryColor,
  secondaryColor: primaryColor
});

export default function App() {
  return (
    <div className="App">
      <H2>What are you doing?</H2>
      <ThemeProvider theme={theme}>
        <H1>Hello CodeSandbox</H1>
        <div>
          <ThemeProvider theme={invertTheme}>
            <H1>Hello Diego, I'm here</H1>
          </ThemeProvider>
        </div>

        <TextArea />
        <Button />
        <Input />
        <Input theme={{ primaryColor: "blue" }} />
      </ThemeProvider>
      <Input theme={{ primaryColor: "cyan" }} />
    </div>
  );
}
