import { BsBookmarkStarFill } from "react-icons/bs"
import { Link } from "react-router-dom";


export const InstructorList = [
  {
    id: 1,
    name: 'BenchPress',
    image: '/images/img1.jpg',
    category: '/Upper',
    subcategories: ['Upper Body']
  },
  {
    id: 2,
    name: 'Squats',
    image: '/images/img2.jpg',
    category: '/Lower',
    subcategories: ['Lower Body']
  },
  {
    id: 3,
    name: 'Planks',
    image: '/images/img3.jpg',
    category: '/Core',
    subcategories: ['Core']
  },
  {
    id: 4,
    name: 'KettlebellSwings',
    image: '/images/img2.jpg',
    category: '/Function',
    subcategories: ['Functional Movements']
  },
  {
    id: 5,
    name: 'DumbbellFlyes',
    image: '/images/img5.jpg',
    category: '/Isolation',
    subcategories: ['Isolationa Exercises']
  },
  {
    id: 6,
    name: 'Snatch',
    image: '/images/img2.jpg',
    category: '/Comp',
    subcategories: ['Compound Exercises']
  },
];

const ExercisesList = () => {
  return(
    <div>
      <div className="categoryTitle mt-10">
        <BsBookmarkStarFill className="text-bgButton sm:w-6 sm:h-6 w-4 h-4"/>
        <h2 className=" font-bold text-lg sm:text-xl">Popular Exercises</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {
          InstructorList.map(category => (
            <div key={category.id} className="shadow-lg relative p-2 rounded-lg bg-fontColor cursor-pointer hover:scale-90 transition-all ease-in-out hover:shadow-[#bbf7d0]">
              <Link to={category.category + '/' +category.name}>
                <img src={category.image} alt={category.name} className="h-[140px] w-full md:h-[200px] object-fit rounded-lg"/>

                <div className="flex justify-between mx-1 items-start pt-1">
                  <div>
                    <h1 className="font-bold text-xs md:text-md lg:md">{category.name}</h1>
                    <h1 className="text-xs">{category.teacher}</h1>
                    {category.subcategories.map(subcategory => (
                      <h6 key={subcategory} className="absolute top-2 left-2 text-xs text-fontColor bg-[#34d399] p-1 rounded-sm md:text-md lg:text-md font-medium">{subcategory}
                      </h6>
                    

                    ))}
                  </div>
                  <div>                     
                    <p className="text-xs">{category.price}</p>
                        
                  </div>
                
                </div>
              </Link>
              
            </div>
          ))
        }

      </div>
    </div>
  )
}
export default ExercisesList