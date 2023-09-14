import PropTypes from "prop-types";
import { FaBookOpen } from 'react-icons/fa';


const Cards = ({course}) => {
console.log(course);
const {picture,
    name,
    details,
    price,
    credit}=course
//   const { picture, name, details, price, credit } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure className="">
          <img
            src={picture}
            alt="Course"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-start">
          <h2 className="text-xl font-semibold">{name}</h2>
                <small>{details}</small>

                <div className="flex gap-4">
                    <p> $ Price : {price}</p>
                    <div className="flex items-center gap-2">
                   <FaBookOpen></FaBookOpen>
                    <p>Credit : {credit}hr</p>
                    </div>
                   

                </div>

          <button className="btn btn-accent w-full">Select</button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Cards;
