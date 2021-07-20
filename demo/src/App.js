import './App.css';
import 'xfed-components/theme.css';
import { Button, Carousel } from 'xfed-components/index';

function App() {
  return (
    <>
      <h1>Components</h1>
      {`
import DatePicker from 'xfed-components/Button';
<Button>Button component</Button>

`}
      <Button>Button component</Button>
      <Carousel data={[0, 1]} type='number'></Carousel>
    </>
  );
}

export default App;
