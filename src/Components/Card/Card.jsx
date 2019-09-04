import React from "react";
import DeleteButton from "../../Controls/DeleteButton/DeleteButton";
import EditButton from "../../Controls/EditButton/EditButton";
import "./Card.scss";
const Card = () => {
  return (
    <div className="brand-card">
      <div className="title-card font-weight-bold p-3">Brand Name</div>
      <div className="body-card d-flex">
        <div className="category-section p-3">
          <div className="text-muted">Category</div>
          <div      className="font-weight-bold">Mens wear</div>
        </div>
        <div className="status-section p-3">
          <div className="text-muted">Status</div>
          <div className="font-weight-bold">Live (ON)</div>
        </div>
      </div>
      <div className="button-group d-flex p-3">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default Card;
