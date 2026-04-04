const WA_LINK = "https://wa.me/5531991315958";

const SymptomAssessment = () => {
  return (
    <div>
      <h1>Formulário de Avaliação de Sintomas</h1>
      <p>Por favor, preencha o formulário abaixo para que possamos ajudá-lo da melhor forma possível.</p>
      <form>
        <button type="submit">Enviar</button>
      </form>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  );
};

export default SymptomAssessment;
