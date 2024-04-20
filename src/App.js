
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadData from './components/loadMoreData';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* ====== Accordian component======= */}
      {/* <Accordian/> */}
      {/* ============ Random Color component ===================*/}
      {/* <RandomColor/> */}
      {/* ============ Star Rating component ===================*/}
      {/* <StarRating noOfStars={10} /> */}
      {/* ============ Image slider component ===================*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      
      {/* ============ Load More Products component ===================*/}
      <LoadData/>
    </div>
  );
}

export default App;
