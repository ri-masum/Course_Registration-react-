const Cart = ({ names,credts,remaining }) => {
  console.log(names);

  return (
    <div>
      <div className="bg-gray-200 w-auto space-y-3">
       
       <h1 className="text-sky-500 font-semibold">
          Credit Hour Remaining {remaining} hr
        </h1>
       
        
        <h1 className="text-black font-semibold">Course Name</h1>

        <div>
          {names.map((name, idx) => (
            <small key={idx} className="text-start">
              <li>{name.name}</li>
            </small>
          ))}
        </div>

        <hr />
        <p className="text-lg">Total Credit Hour :{credts} </p>
        <hr />
        <h1 className="text-lg">Total Price: USD</h1>
      </div>
    </div>
  );
};

export default Cart;
