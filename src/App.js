
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

const App = () => {
  return(
    <div className='app_wrapper'>  
        <Header />
        <Nav/>
        <Profile/>
        <Footer />
    </div>
  )
}

export default App;
