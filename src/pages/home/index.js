export default function Home(){
    return (
        <div>
        <h1>Construindo</h1>
  
        <div className="card-container">
          <div className="card" style={{ width: '400px' }}>
            <img src="construindo" alt="fazendo" />
            <div className="card-body">
              <h4>fazendo</h4>
              <p className="card-text">R$99,99</p>
              <a href="#" className="btn btn-primary">Cliente X Y Z</a>
            </div>
          </div>
          <div className="card" style={{ width: '400px' }}>
            <img src="construindo" alt="fazendo" />
            <div className="card-body">
              <h4>fazendo</h4>
              <p className="card-text">R$99,99</p>
              <a href="#" className="btn btn-primary">Cliente X Y Z</a>
            </div>
          </div>
          {/* Restante dos cards */}
        </div>
  
        <br /><br />
  
        <div className="card-container">
          <div className="card" style={{ width: '400px' }}>
            <img src="construindo" alt="fazendo" />
            <div className="card-body">
              <h4>fazendo</h4>
              <p className="card-text">R$99,99</p>
              <a href="#" className="btn btn-primary">Cliente X Y Z</a>
            </div>
          </div>
          {/* Restante dos cards */}
        </div>
      </div>
    )
}