import React from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button, makeStyles } from "@material-ui/core";
import "../../style/button.scss";

const useStyles = makeStyles({
  customButtonText: {
    fontSize: "12px !important",
    fontWeight: "600 !important",
    fontFamily: "Open Sans sans-serif",
    textTransform: "capitalize !important",
    borderRadius: "2px",
  },
});

const ButtonComponent = ({
  label = "Button",
  variant = "contained", //outlined, text
  size = "small", //medium, large
  color = "default",
  style = {},
  muiProps = "",
  showIcon = false,
  iconSize = "20",
  iconColor = "",
  iconOrintation = "start", //end
  iconName = "",
  disabled = false,
  onClick = () => {},
}) => {
  const classes = useStyles();
  const getIcon = () => {
    if (iconName === "add") {
      return <AddIcon color={iconColor} size={iconSize} />;
    }
  };
  return (
    <Button
      color={color}
      style={style}
      variant={variant}
      size={size}
      disabled={disabled}
      className={`${muiProps}`}
      onClick={onClick}
      startIcon={showIcon && iconOrintation === "start" ? getIcon() : <></>}
      endIcon={showIcon && iconOrintation === "end" ? getIcon() : <></>}
      classes={{ root: classes.customButtonText }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
