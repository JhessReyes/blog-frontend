import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Menu = ({ className }) => {
  return <FontAwesomeIcon icon={faBars} className={className} />;
};

export { Menu };
