import PropTypes from "prop-types";

const Cart = ({ names, credts, remaining,totalPrice }) => {

  let count=1;
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-lg w-auto space-y-3">
        <h1 className="text-sky-500 font-semibold">
          Credit Hour Remaining {remaining} hr
        </h1>

        <div className="border border-b-gray-50 border-t-gray-50">
          <h1 className="text-black font-semibold">Course Name</h1>

          <div className=" p-2">
            
            {names.map((name, idx) => (
              

              <small key={idx} className="text-start">
               <ol>
               <li>{count++}. {name.name}</li>
               
               </ol>
              </small>
              
            ))}
            
          </div>
        </div>

        <hr />
        <p className="text-lg">Total Credit Hour :{credts} </p>
        <hr />
        <h1 className="text-lg">Total Price:{totalPrice} USD</h1>
      </div>
    </div>
  );
};

Cart.propTypes = {
  names: PropTypes.array,
  credts: PropTypes.number,
  remaining: PropTypes.number,
  totalPrice:PropTypes.number
};
export default Cart;
