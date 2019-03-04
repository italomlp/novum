import React from 'react';
import { Layout } from '../components';

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>NÃO ENCONTRADO</h1>
          <p>
            Você entrou num link que não existe ou não está mais disponível.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
