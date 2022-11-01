import React from "react";
import yahooFinance from "yahoo-finance2";

import SwapperView from "./views/SwapperView";

export default function App() {
  function getData() {
    // yahooFinance
    //   .historical("CSCO", {
    //     period1: "2022-10-30",
    //     interval: "1d",
    //   })
    //   .then((quotes) => {
    //     console.log(quotes);
    //   });
  }
  React.useEffect(() => {
    getData();
  }, []);
  return <SwapperView symbol="CSCO" />;
}
