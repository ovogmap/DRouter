import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps,
} from "react-router-dom";

interface MatchParams {
  id: string;
}

export default function Shop({
  match,
}: RouteComponentProps<MatchParams>): React.ReactElement {
  const test = match.params.id;
  console.log(match);
  return (
    <div>
      <div>
        <h1>가게</h1>
      </div>
      <nav>
        <ul
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link to={`/shop/${match.params.id}/test1`}>test1</Link>
          </li>
          <li>
            <Link to={`/shop/${match.params.id}/test2`}>test2</Link>
          </li>
          <li>
            <Link to={`/shop/${match.params.id}/test3`}>test3</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route
            exact
            path={`/shop/${match.params.id}/test1`}
            component={ShTest1}
          />
          <Route
            exact
            path={`/shop/${match.params.id}/test2`}
            component={ShTest2}
          />
          <Route
            exact
            path={`/shop/${match.params.id}/test3`}
            component={ShTest3}
          />
        </Switch>
      </div>
    </div>
  );
}

function ShTest1({ match }: RouteComponentProps) {
  return (
    <div>
      <h2>테스트1</h2>
    </div>
  );
}
function ShTest2() {
  return (
    <div>
      <h2>테스트2</h2>
    </div>
  );
}
function ShTest3() {
  return (
    <div>
      <h2>테스트3</h2>
    </div>
  );
}
