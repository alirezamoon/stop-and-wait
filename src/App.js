import "./App.css";
import StopAndWait from "./Components/stopAndWait";
import ErrorFree from "./Components/errorFree";
import LostFrame from "./Components/lostFrame";
import LostAck from "./Components/lostAck";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/error-free" component={ErrorFree} />
          <Route path="/lost-frame" component={LostFrame} />
          <Route path="/lost-ack" component={LostAck} />
          <Route path="/" exact component={StopAndWait} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
