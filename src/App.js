// components
import { Header } from './components/Header';
import { Home } from './templates/Home';
import { Intro } from './templates/Intro';
import { Footer } from './components/Footer';
import { GridOne } from './templates/GridOne';
import { Gallery } from './templates/Gallery';
import { GridTwo } from './templates/GridTwo';
import { Pricing } from './templates/Pricing';

// css
import './assets/css/App.css';
import './assets/css/classes.css';
import './assets/css/elements.css';
import './assets/css/menu.css';
import './assets/css/responsive.css';
import './assets/css/styles.css';
import './assets/css/variables.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Intro />
      <GridOne />
      <Gallery />
      <GridTwo />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
