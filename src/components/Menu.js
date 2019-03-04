import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/artImortalidade">
            Art x Imortalidade
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/lifestyleForecasting">
            Lifestyle forecasting
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/inteligenciaCores">
            Inteligência de cores
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/wellness">
            Wellness, gênero e prazer
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/mercadoTodxs">
            Mercado de todxs
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/creative">
            Creative
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            href="#contact"
            onClick={props.onToggleMenu}
            className="button special fit scrolly"
          >
            Contato
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Fechar
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
