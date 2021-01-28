import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Main from "../page/Main";
import Owner from "../page/Owner";
import Shop from "../page/Shop";

function AppRouter() {
  const [storeId, setStoreId] = useState<null | string>(null);
  const [tesr, setTest] = useState<boolean>(false);
  const triger = (): void => {
    setTest((v) => !v);
  };
  useEffect(() => {
    setStoreId(localStorage.getItem("STORE_ID"));
  }, [tesr]);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/owner">오너</Link>
          </li>
          <li>
            <Link to={`/shop/${storeId}/test1`}>가게</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/owner">
          <Owner triger={triger} />
        </Route>
        <Route exact path="/shop/:id/:page" component={Shop} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
