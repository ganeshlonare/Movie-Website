import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import MovieGallery from '../movieGallery/MovieGallery';

const Home = ({movies}) => {
  return (
    <>
    <Hero movies = {movies} />
    <MovieGallery movies={movies} />
    <Footer />
    </>
  )
}

export default Home
