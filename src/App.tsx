import ColorList from './components/ColorList';
import './index.css'
import Form from './components/Form';
import Values from 'values.js'
import 'react-toastify/dist/ReactToastify.min.css'
import { useState } from 'react';

import {ToastContainer, toast} from 'react-toastify'
const App = () => {
  const [colors, setColors] = useState(new Values('#F59527').all(10))

  const addColor = (color:any) => {
    try{
      const newColors = new Values(color).all(10);
      setColors(newColors)
    }catch(error:any){
      toast.error(error.message)
    }

  }
  return <main>
    <Form addColor={addColor}/>
    <ColorList colors={colors}/>
    <ToastContainer position='top-center'/>
  </main>;
};
export default App;
