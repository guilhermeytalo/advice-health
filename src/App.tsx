import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Consulta } from './pages/consulta/index.tsx';
import { Agendamento } from './pages/agendamento/index.tsx';
import Dashboard from './pages/dashboard/index.tsx';
import Navbar from './components/sidebar/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
