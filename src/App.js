import { CssVarsProvider, Sheet } from '@mui/joy';
import { Routes, Route } from "react-router-dom";
import '../src/styles/App.css';
import '@fontsource/inter';
import Home from './component/home';
import NoMatch from './component/NoMatch';
import DetailVideo from './component/detail';
import { socket } from './socket';

function App() {
  document.title = "Tokopedia Play |"
  return (
    <CssVarsProvider>
      <Sheet sx={{minHeight:'100vh', minWidth:"100vw"}}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="channel/:id" element={<DetailVideo />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
