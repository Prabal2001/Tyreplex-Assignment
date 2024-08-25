import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navigationbar from './Components/Navbar';
import CarouselPage from './Components/CarouselPage';
import CardPage from './Components/CardPage';
import Deals from './Components/Deals';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';


function App() {

  return (
    <>
     <Navigationbar />
     <CarouselPage />
     <CardPage />
       <Deals />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
