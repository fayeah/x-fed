import './App.css';
import 'xfed-components/theme.css';
import { Button } from 'xfed-components/index';

function App() {
  return (
    <>
      <h1>Components</h1>
      {`
import DatePicker from 'xfed-components/Button';
<Button>Button component</Button>

`}
      <Button>Button component</Button>
    </>
  );
}

export default App;
