import { ReactComponent as Logo } from 'assets/images/masipack-logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './styles.css';

const Sidebar = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <nav className="admin-nav-container">
      <Logo />
      <ul className="admin-nav-items-container">
        <li>
          <NavLink to="/admin/configures" className="admin-nav-item">
            <p>Configurações</p>
          </NavLink>
        </li>
        <li>
          <div
            className="admin-nav-item admin-sub-menu"
            onClick={toggleSubMenu}
          >
            <p>Gestão de acessos</p>
            <span className={`arrow ${isSubMenuVisible ? 'up' : 'down'}`}>
              &#9660;
            </span>
          </div>
          {isSubMenuVisible && (
            <ul>
              <li>
                <NavLink to="/admin/permissions" className="admin-nav-item">
                  <p>Permissões</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/politic" className="admin-nav-item">
                  <p>Politica de seguranca</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/group" className="admin-nav-item">
                  <p>Grupo de permissões</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users" className="admin-nav-item">
                  <p>Usuários</p>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/admin/repports" className="admin-nav-item">
            <p>Relátorios</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/support" className="admin-nav-item">
            <p>Suporte</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
