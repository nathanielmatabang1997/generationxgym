import { BsCollectionFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaBicycle, FaDumbbell, FaHeartbeat, FaRunning, FaSwimmer } from "react-icons/fa";
import { Link } from "react-router-dom";

export const categories = [
  {
    name: 'Upper',
    icon: <FaDumbbell/>,
    link: '/upper'
  },
  {
    name: 'Lower',
    icon: <FaRunning/>,
    link: '/lower'
  },
  {
    name: 'Core',
    icon: <FaBicycle/>,
    link: 'core'
  },
  {
    name: 'Function',
    icon: <FaSwimmer/>,
    link: 'function'
  },
  {
    name: 'Isolation',
    icon: <FaHeartbeat/>,
    link: 'isolation'
  },
  {
    name: 'Comp',
    icon: <FaDumbbell/>,
    link: '/compound'
  },
  {
    name: 'Compound',
    icon: <FaRunning/>,
    link: '/compund'
  },
  {
    name: 'Lower ',
    icon: <FaBicycle/>,
    link: '/lower'
  },
  {
    name: 'Upper',
    icon: <FaSwimmer/>,
    link: 'upper'
  },
  {
    name: 'Core',
    icon: <FaHeartbeat/>,
    link: 'core'
  },
  {
    name: 'Isolation',
    icon: <FaHeartbeat/>,
    link: 'isolation'
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
            <Link to={'/classes/'+category.name} key={index} className="flex flex-col text-center items-center p-5 cardList m-2 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out ">
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