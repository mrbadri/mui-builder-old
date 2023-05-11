import './App.css';
import { ElementBuilder, Elements, Sections } from '@mui-builder/form';

function App() {
  const elements = [
    {
      type: 'sections',
      list: [1],
      elements: [
        {
          type: 'sections',
          list: [1],
        },
      ],
      element: {
        type: 'sections',
        list: [1],
      },
    },
  ];

  return (
    <div>
      {/* <Sections list={[1]} /> */}
      <Elements list={elements} />
      {/* <ElementBuilder type="sections" list={[1]}/> */}
    </div>
  );
}

export default App;
