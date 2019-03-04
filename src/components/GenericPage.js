import React from 'react';
import Layout from './Layout';
import PageBanner from './PageBanner';
// import { Container } from './styles';
import pages from '../pages_content';

const GenericPage = props => {
  const thisPage = pages.find(page => page.id === props.id) || {};
  return (
    <Layout>
      <PageBanner
        title={thisPage.title}
        resume={thisPage.resume}
        style={{ backgroundImage: `url(${thisPage.image})` }}
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            {/* <header className="major">
              <h2>{thisPage.title}</h2>
            </header> */}
            <div dangerouslySetInnerHTML={{ __html: thisPage.content }} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GenericPage;
