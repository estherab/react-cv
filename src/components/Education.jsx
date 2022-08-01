import "./Education.css";
import "../index.css";

export function Education({ education, courses, projects }) {
  return (
    <>
      <div className='education'>
        <h3 className='title'>Formación académica</h3>
        <div className='timeline'>
          {education.map((item, index) => (
            <div
              className={index % 2 === 0 ? "container left" : "container right"}
              key={`${JSON.stringify(item)}-${index}`}
            >
              <div className='date'>{item.date}</div>
              <div className='content'>
                <h2>{item.name}</h2>
                <p className='where'>{item.where}</p>
                <p>{item.contents}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='courses'>
        <h3 className='title'>Otros cursos</h3>
        <div className='timeline'>
          {courses.map((item, index) => (
            <div
              className={index % 2 === 0 ? "container left" : "container right"}
              key={`${JSON.stringify(item)}-${index}`}
            >
              <div className='date'>{item.date}</div>
              <div className='content'>
                <h2>{item.name}</h2>
                <p className='where'>{item.where}</p>
                <p>{item.contents}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='projects'>
        <h3 className='title'>Proyectos</h3>
        <div className='projects-container'>
          {projects.map((item, index) => (
            <div className='project' key={`${JSON.stringify(item)}-${index}`}>
              <h2>{item.name}</h2>
              <p className='project-description'>{item.description}</p>

              <div className='links'>
                <a className='link-project' href={item.link}>
                  Ver web
                </a>
                <a className='link-project' href={item.github}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
