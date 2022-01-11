import styled from "styled-components";

const InputStyled = styled.input((props) => {
  return `
  background-color: ${props.theme.primaryColor};
  `;
});

export default function Input(props) {
  return <InputStyled defaultValue="I'm textarea" {...props} />;
}
