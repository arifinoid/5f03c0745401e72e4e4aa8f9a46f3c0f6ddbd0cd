import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { size } from "polished";

import { color } from "../../globalStyle";

const Icon = styled.div`
  flex-shrink: 0;
`;

const BaseIcon = ({
  icon,
  strokeColor = color.darkGray,
  size: iconContainerSize = 40,
  customFontAwesomeIconSize = "lg",
}) => {
  return (
    <Icon className="icon" css={{ ...size(`${iconContainerSize}px`) }}>
      <FontAwesomeIcon
        icon={icon}
        size={customFontAwesomeIconSize}
        color={strokeColor}
      />
    </Icon>
  );
};

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
  }

  & > *:not(.icon) {
    margin-top: 4px;
  }
`;

export default BaseIcon;
