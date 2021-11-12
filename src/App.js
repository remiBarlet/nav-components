import './App.css';
import BtnPlus from './components/buttons/BtnPlus';
import BtnPlusSpinner from './components/buttons/BtnPlusSpinner';
import BtnPlusToMinus from './components/buttons/BtnPlusToMinus';
import BurgerSlider from './components/buttons/BurgerSlider';
import BurgerCenterToCross from './components/buttons/BurgerCenterToCross'
import DemoLine from './components/DemoLine';

function App() {
  return (
    <div className="App">
      <DemoLine>
        <BurgerCenterToCross />
      </DemoLine>
      <DemoLine>
        <BurgerSlider />
      </DemoLine>
      <DemoLine >
        <BtnPlus />
      </DemoLine>
      <DemoLine >
        <BtnPlusToMinus />
      </DemoLine>
      <DemoLine>
        <BtnPlusSpinner />
      </DemoLine>

    </div>
  );
}

export default App;
