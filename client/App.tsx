import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./home/Homepage";
import About from "./about/About";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>

            <Route exact path="/about">
                <About/>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}