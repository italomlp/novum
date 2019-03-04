import React from 'react';
import { Link } from 'gatsby';

// import { Container } from './styles';

const RichLink = props => (
  <article style={{ backgroundImage: `url(${props.image})` }}>
    <header className="major">
      <h3>{props.title}</h3>
      <p>{props.resume}</p>
    </header>
    <Link to={`/${props.link}`} className="link primary" />
  </article>
);

export default RichLink;
