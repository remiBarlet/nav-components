import './App.css';
import BtnPlus from './components/buttons/BtnPlus';
import BtnPlusSpinner from './components/buttons/BtnPlusSpinner';
import BtnPlusToMinus from './components/buttons/BtnPlusToMinus';
import BurgerSlider from './components/buttons/BurgerSlider';
import BurgerCenterToCross from './components/buttons/BurgerCenterToCross'
import DemoLine from './components/DemoLine';
import BurgerLeftStairs from './components/buttons/BurgerToLeftStairsOnHover';
import BurgerRightStairs from './components/buttons/BurgerToRightStairsOnHover';


function App() {
  return (
    <div className="App">
      <DemoLine title='BurgerCenterToCross 500ms #2e3131' bkColor='rgba(204,204,204,0.1)' color='#2e3131'>
        <BurgerCenterToCross duration={500} burgerColor='#2e3131' fontSize={1.5} />
      </DemoLine>
      <DemoLine title='BurgerSlider 1000ms #2e3131' bkColor='rgba(204,204,204,0.2)'>
        <BurgerSlider  duration={1000} burgerColor='#2e3131' fontSize={1.5} />
      </DemoLine>
      <DemoLine title='BurgerToLeftStairs 300ms' bkColor='rgba(204,204,204,0.3)'>
        <BurgerLeftStairs duration={300} fontSize={1.5} />
      </DemoLine> 
      <DemoLine title='BurgerToRightStairs 300ms' bkColor='rgba(204,204,204,0.4)'>
        <BurgerRightStairs duration={300} fontSize={1.5} />
      </DemoLine>       
      <DemoLine title='BtnPlus 500ms #2e3131' bkColor='rgba(204,204,204,0.5)'>
        <BtnPlus  duration={500} btnColor='#2e3131' fontSize={1.5} />
      </DemoLine>
      <DemoLine title='BtnPlusToMinus 1000ms #2e3131' bkColor='rgba(204,204,204,0.6)'>
        <BtnPlusToMinus  duration={1000} btnColor='#2e3131' fontSize={1.5} />
      </DemoLine>
      <DemoLine title='BtnPlusSpinner 2000ms #2e3131' bkColor='rgba(204,204,204,0.7)'>
        <BtnPlusSpinner  duration={2000} btnColor='#2e3131' fontSize={1.5} />
      </DemoLine>


    </div>
  );
}

export default App;
