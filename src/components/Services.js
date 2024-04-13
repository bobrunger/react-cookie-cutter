import Service from "./Service";
import Title from "./Title";
import { servicesData } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <Service
              key={service.id}
              serviceName={service.title}
              serviceText={service.text}
              serviceIcon={service.icon}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
