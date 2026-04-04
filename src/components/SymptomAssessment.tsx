import React from 'react';
import { WhatsAppLink } from './WhatsAppLink';

const SymptomAssessment = () => {
  return (
    <div>
      <h1>Formulário de Avaliação de Sintomas</h1>
      <p>Por favor, preencha o formulário abaixo para que possamos ajudá-lo da melhor forma possível.</p>
      <form>
        {/* Your form elements go here */}
        <button type="submit">Enviar</button>
      </form>
      <WhatsAppLink number="5531991315958" />
    </div>
  );
};

export default SymptomAssessment;