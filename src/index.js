import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import App from "@/App";
// 插件重置样式
import "normalize.css";
//自定义css
import "@/assets/css/index.less";
//导入redux
import store from "./store";
import theme from "./assets/theme";

// @=>src:webpack
// 问题:react脚手架隐藏webpack
// 解决一:npm run eject  (但是不可逆)
// 解决二:craco=>create-react-app config

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback={<h1>loading...</h1>}>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
);
