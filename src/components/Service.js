// check Readme for more challenging solutions & video 66 for setting up service info without making a new component

const Service = ({title,text,icon}) => {
  return (
        
            <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
              {text}
            </p>
          </div>
          
  )
}
export default Service