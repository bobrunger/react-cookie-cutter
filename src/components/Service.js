const Service = ({ serviceName, serviceText, serviceIcon }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={serviceIcon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{serviceName}</h4>
        <p className="service-text">{serviceText}</p>
      </div>
    </article>
  );
};
export default Service;
