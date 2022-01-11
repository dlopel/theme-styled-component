import { useContext } from "react";
import { ThemeContext } from "styled-components";
//using theme without style component with useContext
function TextArea() {
  const theme = useContext(ThemeContext);
  return (
    <textarea
      style={{ backgroundColor: theme.primaryColor }}
      defaultValue="I'm textarea"
    />
  );
}

export default TextArea;
