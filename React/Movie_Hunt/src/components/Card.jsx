import DummyImg from "/image-placeholder.png";

export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card-img-top">
          <img src={DummyImg} />
        </div>
      </div>
    </div>
  );
};
