import "./More.css";

export function More({ languages, abilities }) {
  return (
    <div className='more'>
      <h3 className='title'>Lenguajes y aptitudes</h3>
      <div className='abilities'>
        {abilities.map((item, index) => (
          <p className='ability'>{item}</p>
        ))}
      </div>
    </div>
  );
}
