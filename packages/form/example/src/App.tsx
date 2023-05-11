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
      {/* <Elements list={elements} /> */}
      <ElementBuilder
        component='sectionBuilder'
        element={{
          component: 'sectionBuilder',
          children: '- level 2',
          element: {
            component: 'sectionBuilder',
            children: '- level 3',
            element: { component: 'sectionBuilder', children: '- level 4' },
          },
        }}
      >
        level 1
      </ElementBuilder>
    </div>
  );
}

export default App;
