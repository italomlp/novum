import React from 'react';
import Helmet from 'react-helmet';

const PageBanner = props => (
  <React.Fragment>
    <Helmet titleTemplate={`%s | Novum`}>
      <title>{props.title}</title>
      <meta name="description" content={props.description || props.title} />
    </Helmet>
    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>{props.title}</h1>
        </header>
        <div className="content">
          <p>{props.resume}</p>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default PageBanner;
