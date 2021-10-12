import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Cart from './components/Cart/Cart';
import Chef from './components/Chef/Chef';
import Customer from './components/Customer/Customer';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Reservation from './components/Reservation/Reservation';
import Service from './components/Service/Service';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
       <Route exact path='/'>
          <Hero></Hero>
          <About></About>
          <Service></Service>
          <Menu></Menu>
          <Chef></Chef>
          <Reservation></Reservation>
          <Customer></Customer>
          <Blog></Blog>
       </Route>
       <Route path='/home'>
          <Hero></Hero>
          <About></About>
          <Service></Service>
          <Menu></Menu>
          <Chef></Chef>
          <Reservation></Reservation>
          <Customer></Customer>
          <Blog></Blog>
       </Route>
       <Route path='/about'>
          <About></About>
       </Route>
       <Route path='/menu'>
       <Menu></Menu>
       </Route>
       <Route path='/service'>
       <Service></Service>
       </Route>
       <Route path='/contact'>
       <Chef></Chef>
       </Route>
       <Route path='/table'>
       <Reservation></Reservation>
       </Route>
       <Route path='/cart'>
       <Cart></Cart>
       </Route>
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
