import Banner from "../Components/Banner"
import CategoryList from "../Components/CategoryList"
import ExercisesList from "../Components/ExercisesList"
import Layout from "../Layout/Layout"

const HomeScreen = () => {
  return(
    <Layout>
      <div className="container mx-auto md:p-0 p-2">
        
        <Banner/>
        <CategoryList/>
        <ExercisesList/>
      </div>
    </Layout>
  )
}
export default HomeScreen