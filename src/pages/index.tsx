import SidebarDefault from '../components/sidebar';
import { Agendamento } from './agendamento';
import { Consulta } from './consulta';
import Dashboard from './dashboard';

export const Pages = () => {
  return (
    <div>
        <SidebarDefault />
        <Dashboard />
        <Consulta />
        <Agendamento />
    </div>
  );
};
