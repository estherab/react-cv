import "./About.css";

export function About({ about }) {
  return (
    <div className='about'>
      <div className='main'>
        <img src={require("../assets/image.png")} alt='Esther' />

        <div className='main-info'>
          <h1>{about.name}</h1>
          <span>Desarolladora junior front-end</span>

          <a href='src\assets\CV.pdf' download>
            <button>Descargar CV (.pdf)</button>
          </a>
        </div>
      </div>

      <h3 className='title'>Sobre mi</h3>
      <h4>
        Soy graduada en Ingeniería Informática. Recientemente he realizado un
        bootcamp de desarrollo web, ya que es una área que me atrae y donde me
        gustaría crecer profesionalmente. Me gusta afrontar nuevos retos y estar
        en constante aprendizaje adaptándome a la evolución de la tecnología.
      </h4>

      <div className='location'>
        <img
          className='location-icon'
          src={require("../assets/location.png")}
          alt='Localización'
        />

        <p>Madrid</p>
      </div>

      <a href='mailto:esther.abenito@gmail.com'>esther.abenito@gmail.com</a>

      <div className='icons'>
        <a
          className='linkedin-link'
          href='https://www.linkedin.com/in/esther-avila-benito/'
        >
          <img
            className='linkedin-icon'
            src={require("../assets/linkedin.png")}
            alt='LinkedIn'
          />
        </a>
        <a href='https://github.com/estherab/'>
          <img
            className='github-icon'
            src={require("../assets/github.png")}
            alt='GitHub'
          />
        </a>
      </div>
    </div>
  );
}
