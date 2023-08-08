import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Consulta } from './pages/consulta/index.tsx';
import { Agendamento } from './pages/agendamento/index.tsx';
import { Pages } from './pages/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="dashboard" element={<Pages />} />
        <Route path="consulta" element={<Consulta />} />
        <Route path="agendamento" element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
