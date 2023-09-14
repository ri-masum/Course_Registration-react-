import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  return (
    <div>
       <div className="flex flex-wrap gap-4">
       {
            courses.map((course,idx)=><Cards course={course} key={idx} courses={courses}></Cards>)
        }
       </div>
    </div>
  );
};

export default Home;
