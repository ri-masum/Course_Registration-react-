import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [names,setNames]=useState([])
  const [credts,setCredits]=useState(0)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  const handleBtn=(name)=>{

    const newNames=[...names,name]

    const isExist=names.find(item=>item.credit ===name.credit)
    let count=name.credit;
    if(isExist){
        return alert('eita already add ace')

    }

  else{

        names.forEach(item=>{
            count=count+item.credit;
        })
        // console.log(count);
        

        setCredits(count)
    setNames(newNames)
  }

    

  }
  return (
    <div>
       <div className="flex gap-5"> 
       <div className="flex flex-wrap gap-4  bg-red-100 w-4/5">
       {
            courses.map((course,idx)=><Cards course={course} key={idx} 
            courses={courses}
            handleBtn={handleBtn}
            ></Cards>)
        }
       </div>

        <Cart names={names}
        credts={credts}
        ></Cart>
       </div>

    </div>
  );
};

export default Home;
