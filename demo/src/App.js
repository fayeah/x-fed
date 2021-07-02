import './App.css';
import 'xfed-components/theme.css';
import { Button } from 'xfed-components/index';

function App() {
  return (
    <>
      <h1>ACME’s Components</h1>
      {`
import DatePicker from 'acme-components/DatePicker';
<Button>Button component</Button>

`}
      <Button>Button component</Button>
    </>
  );
}

export default App;
