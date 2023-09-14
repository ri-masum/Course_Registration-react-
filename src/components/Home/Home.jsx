import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [names,setNames]=useState([])
  const [credts,setCredits]=useState(0)
  const [remaining,setRemaining]=useState(20)
  const [totalPrice,setTotalPrice]=useState(0)

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  const handleBtn=(name)=>{

    const newNames=[...names,name]



    const isExist=names.find(item=>item.credit ===name.credit)
    let count=name.credit;
    let price=name.price
    if(isExist){
        return alert('eita already add ace')

    }

  else{

        names.forEach(item=>{
            count=count+item.credit;
        })
        // console.log(count);
        names.forEach(item=>{
            price=price+item.price
        })

        const totalRemaining=20-count;
        if(count>20){
            alert ('credit limit is 20')
        }

        else{


            setRemaining(totalRemaining)
            setCredits(count)
            setNames(newNames)
            setTotalPrice(price)

          }

        }
     

    

  }
  return (
    <div>
       <div className="flex gap-5"> 
       <div className="flex flex-wrap gap-4  w-4/5">
       {
            courses.map((course,idx)=><Cards course={course} key={idx} 
            courses={courses}
            handleBtn={handleBtn}
            ></Cards>)
        }
       </div>

        <Cart names={names}
        credts={credts}
        remaining={remaining}
        totalPrice={totalPrice}

        ></Cart>
       </div>

    </div>
  );
};

export default Home;
