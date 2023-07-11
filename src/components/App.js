import Menu from './Menu';
import Submenu from './Submenu';
import Content from './Content';
import { useState } from 'react';

function App() {
  const [submenu, setSubmenu] = useState('');
  const [video, setVideo] = useState('');
  return (
    <div className="app">
      <Menu setSubmenu={setSubmenu} />
      <Submenu submenu={submenu} setVideo={setVideo} />
      <Content video={video} />
    </div>
  );
}

export default App;
