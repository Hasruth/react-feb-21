import ComponentA, { ComponentB, ComponentC } from '../src/export';
import ButtonComponent from './button';
import ConditionRender from './conditionrender';
import InlineStyles from './inlinestyles';
import Content from './bootsrtap';
import AccordianComponent from './accordian';
import Profile from './props/profile';
import Counter from './state/counter';
import UserData from './axios/users';
import MountingPhase from './lifeCycle/mountingPhase';
import UpdatingPhase from './lifeCycle/updatingPhase';
import Parent from './lifeCycle/unmountingPhase';
import ParentEle from './pureComponents/parentEle';


function App() {
  return (

<ParentEle/>

  );
}

export default App;
