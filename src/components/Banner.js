import React from 'react';
import Helmet from 'react-helmet';

const Banner = props => (
  <React.Fragment>
    <Helmet
      title="Novum"
      meta={[
        {
          name: 'description',
          content: `
            Futurologia, previsão de tendências em comportamento, consumo e lifestyle,
            e estudos culturais sobre transumanismo
          `,
        },
        {
          name: 'keywords',
          content: `
            futurologia, futurismo, tendencias, pesquisa de tendencias, transumanismo,
            consumo, comportamento, lifestyle, inteligencia de cores, consultoria,
            cultura
          `,
        },
      ]}
    />
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>Novum</h1>
        </header>
        <div className="content">
          <p>
            Futurologia, previsão de tendências em comportamento, consumo e
            lifestyle, e estudos culturais sobre transumanismo
          </p>
          <ul className="actions">
            <li>
              <a href="#projects" className="button next scrolly">
                Projetos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Banner;
