import imageOne from './img/imageOne.png';
import imageTwo from './img/imageTwo.png'
import imageThree from './img/imageThree.png'
import './App.css';

function App() {
  return (
    <div className='section-wrapper'>
      <section className='section-container'>
        <div className='section-left'>
          <img alt='imageOne' className='image-style' src={imageOne} />
        </div>
        <div className='section-right'>
          <div className='text-container'>
            <p className='text-title'>
              Heating your home,<br /><span>not the planet</span>
            </p>
            <p className='text-paragraph'>
              The future of green sustainable heating is already here
            </p>
          </div>
        </div>
      </section>
      <section className='section-container'>
        <div className='section-left'>
          <div className='text-container'>
            <p className='text-title'>
              The future of heating is<br />
              <span>clean</span>,&nbsp;
              <span>green</span>
              &nbsp;and&nbsp;
              <span>affordable</span>
            </p>
            <p className='text-paragraph'>
              Our patent pending Zero Emission Boiler (ZEB) technology is revolutionising the way we heat our homes
            </p>
          </div>
        </div>
        <div className='section-right'>
          <img alt='imageTwo' className='image-style' src={imageTwo} />
        </div>
      </section>
      <section className='section-container'>
        <div className='section-left'>
          <img alt='imageOne' className='image-style' src={imageThree} />
        </div>
        <div className='section-right'>
          <div className='text-container'>
            <p className='text-title'>
              Use the <span>power you generate</span>
            </p>
            <p className='text-paragraph'>
              If you have rooftop solar PV a ZEB can automatically store excess electricity produced so you don’t unnecessarily export it to the grid
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
