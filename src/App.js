import './App.css';
import CarouselSlider from './Component/carouselSlider';
import Category from './Component/category';
import Footer from './Component/footer';
import Header from './Component/header';
// import Testimonial from './Component/testimonials';

function App() {
  return (
    <>
      <Header />
      <CarouselSlider />
      <Category />
      <Footer />
      {/* <Testimonial /> */}
    </>
  );
}

export default App;
