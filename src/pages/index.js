import React from 'react';
import { Layout, Banner, RichLink } from '../components';
import pages from '../pages_content';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Banner />

        <div id="main">
          <section id="projects" className="tiles">
            {pages.map(page => (
              <RichLink
                key={page.id}
                title={page.title}
                resume={page.resume}
                link={page.id}
                image={page.image}
              />
            ))}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Quem somos</h2>
              </header>
              <p>
                Futuristas, analistas culturais, jornalistas, designer,
                cientistas e pesquisadores, entre outros profissionais do
                mercado criativo. Trabalhamos com base em tendências e previsões
                de vários cenários possíveis para os próximos anos – e décadas.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
