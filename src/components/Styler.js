import React, { useEffect } from "react";
import tenoxui, { addType, makeStyles } from "./tui/tui.js";

const Styler = () => {
  useEffect(() => {
    addType("fxw", ["flexWrap"]);

    makeStyles({
      ".fx-ctr, .fx-center": "display-flex flex-parent-center",
      ".w-full,.w-mx": "w-100%",
      ".h-full,.h-mx": "h-100%",
      ".fx-wrap,.flex-wrap": "fxw-wrap",
      ".ai-full": "ai-stretch",
      ".features": "display-flex ai-center ph-2rem w-100%",
    });
    tenoxui();
  }, []);
};

export default Styler;
