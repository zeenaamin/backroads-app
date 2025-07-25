import Service from './Service';
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
            <Service title="saving money" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." />
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <Service title="endless hiking" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." />
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <Service title="amazing comfort" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." />
        </article>
      </div>
    </section>
  )
}
export default Services