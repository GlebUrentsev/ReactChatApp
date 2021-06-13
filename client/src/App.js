import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, ChatRoom } from "./components/index";

export const App = () => (
  <Router>
    <Container style={{ maxWidth: "800px" }}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:roomId" exact>
          <ChatRoom />
        </Route>
      </Switch>
    </Container>
  </Router>
);
