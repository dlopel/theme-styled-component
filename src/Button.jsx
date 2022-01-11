import { withTheme } from "styled-components";
//using theme without style component
function Button(props) {
  return (
    <button style={{ backgroundColor: props.theme.primaryColor }}>
      Enviar
    </button>
  );
}

export default withTheme(Button);
