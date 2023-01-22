import { useParams } from "react-router-dom";

const faqs = [{
  question: "¿Cómo puedo llegar al recinto?",
  answer: "Existen buses a disposición del publico"
}, {
  question: "¿A qué hora empieza?",
  answer: "A las 22.00"
}, {
  question: "¿Puedo meter comida?",
  answer: "No, tienes que comprar dentro"
}];


const Faqs = () => {

  const { id } = useParams();

  return (
    <div className="page">
      <h1>Faqs</h1>

      {
        faqs[id] ?
          <div className="faq">
            <p className="faq__question"><strong>{faqs[id].question}</strong></p>
            <p className="faq__answer">{faqs[id].answer}</p>
          </div> :
          <p>No tengo esa pregunta, prueba con otro número</p>
      }

    </div>
  );
}

export default Faqs;
