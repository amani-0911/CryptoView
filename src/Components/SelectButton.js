import { makeStyles } from '@material-ui/core';
import React from 'react';

const SelectButton = ({children,selected,onClick}) => {
const useStyles=makeStyles({
    selectbutton: {
        border: "1px solid #276afb",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#276afb" : "",
        color: selected ? "white" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "#276afb",
          color: "white",
        },
        width: "22%",
      },
});
const classes=useStyles();

    return (
      <span
      onClick={onClick}
      className={classes.selectbutton}
      >{children}</span>

  );
};

export default SelectButton;
