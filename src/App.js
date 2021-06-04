import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <body className="App-body">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NoMatch} />
        </Switch>
        </body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
