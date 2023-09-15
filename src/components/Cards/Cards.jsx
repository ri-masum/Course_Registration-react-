import PropTypes from "prop-types";
import { FaBookOpen } from "react-icons/fa";

const Cards = ({ course,handleBtn }) => {

  const { picture, name, details, price, credit } = course;
  //   const { picture, name, details, price, credit } = course;
  return (
    <div>
      <div className="card w-[300px] h-[420px] bg-base-100 shadow-2xl space-y-5 relative">
        
          <img src={picture} alt="Course" className="" />
        
        <div className="text-start">
          <h2 className="text-xl font-semibold">{name}</h2>
          <small className="mt-5">{details}</small>

          <div className="flex gap-4 mt-5">
            <p className="text-sm"> $Price:{price}</p>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-sm"></FaBookOpen>
              <p className="text-sm">Credit:{credit}hr</p>
            </div>
          </div>

          <button className="btn btn-accent  w-9/12 absolute bottom-0  " onClick={()=>handleBtn(course)}>Select</button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  course: PropTypes.object.isRequired,
  handleBtn:PropTypes.func
};

export default Cards;
