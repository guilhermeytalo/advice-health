import { useEffect } from 'react';
import './styles.css';
import personProfile from '../../assets/personProfile.svg';

function SidebarDefault() {
  const img = personProfile;
  useEffect(() => {
    const showNavbar = (
      toggleId: string,
      navId: string,
      bodyId: string,
      headerId: string
    ) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
        });
      }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink(this: HTMLElement) {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  }, []);

  return (
    <div>
      <div className="header" id="header">
        <div className="header_toggle">
          {' '}
          <i className="bx bx-menu" id="header-toggle"></i>{' '}
        </div>
        <div className="header_img">
          {' '}
          <img src={img} alt="" />{' '}
        </div>
      </div>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            {' '}
            <a href="#" className="nav_logo">
              {' '}
              <i className="bx bx-layer nav_logo-icon"></i>{' '}
              <span className="nav_logo-name">BBBootstrap</span>{' '}
            </a>
            <div className="nav_list">
              {' '}
              <a href="#" className="nav_link active">
                {' '}
                <i className="bx bx-grid-alt nav_icon"></i>{' '}
                <span className="nav_name">Dashboard</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <i className="bx bx-user nav_icon"></i>{' '}
                <span className="nav_name">Consultas</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <i className="bx bx-message-square-detail nav_icon"></i>{' '}
                <span className="nav_name">Agendamentos</span>{' '}
              </a>{' '}
            </div>
          </div>{' '}
          <a href="#" className="nav_link">
            {' '}
            <i className="bx bx-log-out nav_icon"></i>{' '}
            <span className="nav_name">SignOut</span>{' '}
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SidebarDefault;
