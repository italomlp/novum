import React from 'react';
import Helmet from 'react-helmet';

const Banner = props => (
  <React.Fragment>
    <Helmet
      title="Novum"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>Novum</h1>
        </header>
        <div className="content">
          <p>
            Futurologia, previsão de tendências em lifestyle, e estudos
            culturais sobre transumanismo
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button next scrolly">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Banner;
