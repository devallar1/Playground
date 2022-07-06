import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return <canvas class={styles.App} id="webgl"></canvas>;
};

export default App;
