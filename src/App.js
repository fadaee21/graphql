import "./App.css";
import { Post } from "./pages/Post";
import { CharacterList } from "./pages/CharacterList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Character } from "./pages/Character";
import { Search } from "./pages/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/search" component={Search} />
          <Route path="/:id" component={Character} />
        </Switch>
      </BrowserRouter>

      {/* <Post /> */}
    </div>
  );
}

export default App;
