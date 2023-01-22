import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Close = ({ className }) => {
  return <FontAwesomeIcon icon={faClose} className={className} />;
};

export { Close };
