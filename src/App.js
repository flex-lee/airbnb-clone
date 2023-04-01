import React, { memo, useState, useCallback } from "react";
import { useRoutes } from "react-router-dom";

import Dialog from "./base-ui/dialog";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";

const App = memo(() => {
  const [showDialog, setShowDialog] = useState(false);

  /* 改变dialog状态函数 */
  const changeDialogHandle = useCallback((isShow) => {
    if (isShow) {
      setShowDialog(isShow);
      document.documentElement.style.overflow = "hidden";
    }
    setShowDialog(isShow);
  }, []);

  return (
    <div>
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter changeDialog={(isShow) => changeDialogHandle(isShow)} />
      {showDialog && (
        <Dialog
          showDialog={showDialog}
          changeDialog={(isShow) => changeDialogHandle(isShow)}
        />
      )}
    </div>
  );
});

export default App;
