import React from 'react';
import { Link } from 'gatsby';
import { Layout, Banner, RichLink } from '../components';
import pages from '../pages_content';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            {pages.map(page => (
              <RichLink
                key={page.id}
                title={page.title}
                resume={page.resume}
                link={page.id}
              />
            ))}
            {/* <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Art x Imortalidade</h3>
                <p>Cultura, design e inteligência artificial</p>
              </header>
              <Link to="/artImortalidade" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Lifestyle forecasting</h3>
                <p>
                  Análise de tendências em design, decoração, arquitetura e
                  outros nichos de estilo de vida
                </p>
              </header>
              <Link to="/lifestyleForecasting" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Inteligência de cores</h3>
                <p>
                  Paletas sazonais e macrotendências como estratégias de
                  negócios
                </p>
              </header>
              <Link to="/inteligenciaCores" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Wellness, gênero e prazer</h3>
                <p>
                  Quando tecnologia e filosofia se unem para criar um novo
                  estilo de vida
                </p>
              </header>
              <Link to="/wellness" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Mercado de todxs</h3>
                <p>Boomers, Geração X, Millennials e Centennials</p>
              </header>
              <Link to="/mercadoTodxs" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Creative</h3>
                <p>Projetos customizados de design, artes e cultura</p>
              </header>
              <Link to="/creative" className="link primary" />
            </article> */}
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
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
