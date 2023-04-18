import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
 <Switch>
 <NavBar />
   <Route exact path="/about">
     <About />
   </Route>
   <Route exact path="/projectpage">
     <ProjectPage  />
   </Route>
   <Route exact path="/animation">
     <Animation  />
   </Route>
   <Route path="/individualProjects/:id">
     <IndividualProjects />
   </Route>
   <Route path="/contact">
     <Contact/>
   </Route>
   <Route exact path="/">
   <Home  />
   </Route>
 </Switch>

    </div>
  );
}

export default App;
