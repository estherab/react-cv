import "./Experience.css";
import "../index.css";

export function Experience({ experience }) {
  return (
    <div className='experience'>
      <h3 className='title'>Experiencia laboral</h3>
      <div className='timeline'>
        {experience.map((item, index) => (
          <div
            className={index % 2 === 0 ? "container left" : "container right"}
            key={`${JSON.stringify(item)}-${index}`}
          >
            <div className='date'>{item.date}</div>
            <div className='content'>
              <h2>{item.name}</h2>
              <p className='where'>{item.where}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
