import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import Preloader from './components/Preloader';
import { Home } from './templates/Home';
import { Intro } from './templates/Intro';
import { GridOne } from './templates/GridOne';
import { Gallery } from './templates/Gallery';
import { GridTwo } from './templates/GridTwo';
import { Pricing } from './templates/Pricing';
import { ContactMe } from './templates/ContactMe';

// css
import './Assets/css/App.css';
import './Assets/css/classes.css';
import './Assets/css/elements.css';
import './Assets/css/menu.css';
import './Assets/css/responsive.css';
import './Assets/css/styles.css';
import './Assets/css/variables.css';
import './Assets/custom/style.css';

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/grid-one" component={GridOne} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/grid-two" component={GridTwo} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact-me" component={ContactMe} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
