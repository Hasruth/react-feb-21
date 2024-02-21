import ComponentA, { ComponentB, ComponentC } from '../src/export';
import ButtonComponent from './button';
import ConditionRender from './conditionrender';



function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ButtonComponent />
      <ConditionRender/>
    </div>
  );
}

export default App;
