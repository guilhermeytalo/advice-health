import * as BsIcons from 'react-icons/bs';

export const sideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BsIcons.BsFillHouseFill />,
    cName: 'nav-text'
  },
  {
    title: 'Consultas',
    path: '/consulta',
    icon: <BsIcons.BsSend />,
    cName: 'nav-text',
  },
  {
    title: 'Agendamentos',
    path: '/agendamento',
    icon: <BsIcons.BsFileCheck />,
    cName: 'nav-text',
  },
];
