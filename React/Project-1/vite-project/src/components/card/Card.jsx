import PropTypes from "prop-types";
import "./Card.css";

let userData = [
  {
    cardImg: "/images/laptop.jpg",
    category: "Technology",
    title: "What's New In 2022 Tech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    profileImg: "/images/girl.jpg",
    name: "Jane Doe",
    status: "2h ago",
  },
  {
    cardImg: "/images/food.jpg",
    category: "Food",
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    profileImg: "/images/baby.jpg",
    name: "Jony Doe",
    status: "Yesterday",
  },
  {
    cardImg: "/images/car.jpg",
    category: "Automobile",
    title: "Race To Your Heart Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    profileImg: "/images/robo.webp",
    name: "John Doe",
    status: "2d ago",
  },
  {
    cardImg: "/images/car.jpg",
    category: "Technology",
    title: "Race To Your Heart Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    profileImg: "/images/robo.webp",
    name: "John Doe",
    status: "2d ago",
  },
  {
    cardImg: "/images/food.jpg",
    category: "Food",
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
    profileImg: "/images/baby.jpg",
    name: "Jony Doe",
    status: "Yesterday",
  },
];
function Card(props) {
  return (
    <div className="card shadow border-0">
      <div className="card-img">
        <img className="img-fluid" src={props.cardImg} alt="Laptop" />
      </div>
      <div className="card-body p-3">
        <p className={props.category == "Technology"? "tag technology": props.category == "Food"? "tag food": "tag automobile"}>{props.category}</p>
        <h5 className="mt-3">{props.title}</h5>
        <p className="mt-2 text-secondary">{props.description}</p>
        <div className="profile d-flex justify-content-start align-items-center mt-4">
          <div className="profile-img">
            <img className="image-fluid" src={props.profileImg} alt="Girl" />
          </div>
          <div className="profile-info mt-2">
            <h6 className="m-0">{props.name}</h6>
            <p className="text-secondary">{props.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <Card
          key={index}
          cardImg={user.cardImg}
          category={user.category}
          title={user.title}
          description={user.description}
          profileImg={user.profileImg}
          name={user.name}
          status={user.status}
        />
      ))}
    </>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
