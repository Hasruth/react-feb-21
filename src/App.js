import ComponentA, { ComponentB, ComponentC } from '../src/export';
import ButtonComponent from './button';

function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ButtonComponent />
    </div>
  );
}

export default App;
