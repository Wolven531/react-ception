// import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { App2 } from "./App2";

console.log("[App2/index.ts] loaded");

export * from "./App2";

const elemContainerFromParent = document.getElementById(
  "placeholder"
) as HTMLElement;
// const container = document.getElementById("app") as HTMLElement;

if (elemContainerFromParent) {
  const injectionRoot = createRoot(elemContainerFromParent);
  injectionRoot.render(App2({}));
  //   const portal = createPortal(App2({}), container);
} else {
  console.warn("no container");
}
