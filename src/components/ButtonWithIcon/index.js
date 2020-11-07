import React from "react";
import MaterialIcon from "material-icons-react";

import { Button } from './styles'

const ButtonWithIcon = ({ color, icon }) => (
    <Button>
      <MaterialIcon color={color} icon={icon} />
    </Button>
  );

export default ButtonWithIcon;
