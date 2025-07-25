import {tours} from '../data'


const TourCard = () => {
  return (
    
    <section className="tours">
      <div className="section-center featured-center">
        {tours.map(({ id, image, date, title, info, duration, location, cost }) => (
          <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-mig" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
        ))}
        </div>
      </section>
   
  )
}
export default TourCard