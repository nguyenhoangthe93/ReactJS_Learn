import React from "react";
import LoginForm from "./LoginForm";
function Panel(props) {

    const { theme , handleChangeTheme } = props;
    return (
      <div className={`border p-3 ${theme}`}>
        <LoginForm theme = {theme} handleChangeTheme = {handleChangeTheme}/>
      </div>
    )
  }

export default Panel