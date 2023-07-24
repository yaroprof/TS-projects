import React, {useState} from 'react';
import Slider from './components/Slider';

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50)
  const handleSliderChange = (value: number) => {
    setSliderValue(value)
  }
  return (
    <div>
      <Slider min={0} max={100} initialValue={sliderValue} onChange={handleSliderChange} />
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
};

export default App;
