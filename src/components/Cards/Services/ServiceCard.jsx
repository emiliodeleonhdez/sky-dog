import React from "react";

const ServiceCard = (props) => {

  const { id, cardTitle, cardBody } = props;

  return (
    <div className="service__card border border-black border-2 rounded-4 my-3 d-flex">
        <aside className="w-25 text-center p-3 fw-bold">{`${id}.`}</aside>
        <article className="mt-3">
            <h5>{cardTitle}</h5>
            <p>{cardBody}</p>
        </article>
    </div>
  );
};

export default ServiceCard;
