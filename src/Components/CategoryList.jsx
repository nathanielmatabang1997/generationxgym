import { BsCollectionFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaBicycle, FaDumbbell, FaHeartbeat, FaRunning, FaSwimmer } from "react-icons/fa";
import { Link } from "react-router-dom";

export const categories = [
  {
    _id: '1',
    name: 'Upper',
    icon: <FaDumbbell/>,
   
  },
  {
    _id: '2',
    name: 'Lower',
    icon: <FaRunning/>,
    
  },
  { 
    _id: '3',
    name: 'Core',
    icon: <FaBicycle/>,
    
  },
  {
    _id: '4',
    name: 'Function',
    icon: <FaSwimmer/>,
    
  },
  {
    _id: '5',
    name: 'Isolation',
    icon: <FaHeartbeat/>,
    
  },
  {
    _id: '6',
    name: 'Comp',
    icon: <FaDumbbell/>,
    
  }
];

const CategoryList = () => {
  return( 
    <div>
      <div className="categoryTitle mt-5">
        <BsCollectionFill className="text-bgButton sm:w-6 sm:h-6 w-4 h-4"/>
        <h2 className=" font-bold text-lg sm:text-xl">Categories</h2>

      </div>
      <div className="grid grid-cols-3 pl-1 mt-4  md:grid-cols-4 lg:grid-cols-6 list-none">
      
          {categories.map((category, index) => index<6 && (
            <Link to={'/'+category.name} key={index} className="flex flex-col text-center items-center p-5 cardList m-2 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out ">
              <IconContext.Provider value={{size: '1.5em',color: '#34d399'}}>
                {category.icon}
              </IconContext.Provider>
              {category.name}
            </Link>
          ))}
        
      </div>

    </div>
    
  )
}
export default CategoryList