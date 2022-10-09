import pin from './pin.png'
import './App.css';


function Main(props) {
    return (
      <div className="container">
        <div className="main">
        <div>
        <img src={`${props.item.imageUrl}`}  className="card-image" alt="cards"/>
        </div>
        <div className="small-container">
        <div className="info">
          <img src={pin} className="star" alt="google pin"/>
          <p className="Country">{props.item.location}</p>
          <a className="view" href={`${props.item.googleMapsUrl}`} >View on Google Maps</a>
        </div>
       <div className="import">
        <h1 className="Header-name">{props.item.title}</h1>
        <p className="date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="about">{props.item.description}</p>
        </div>
        </div>
        </div>
        <hr/>
        
      </div>
    );
  }
  
  export default Main;