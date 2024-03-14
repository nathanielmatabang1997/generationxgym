import Banner from "../Components/Banner"
import CategoryList from "../Components/CategoryList"
import IntructorList from "../Components/IntructorList"
import Layout from "../Layout/Layout"

const HomeScreen = () => {
  return(
    <Layout>
      <div className="container mx-auto md:p-0 p-2">
        
        <Banner/>
        <CategoryList/>
        <IntructorList/>
      </div>
    </Layout>
  )
}
export default HomeScreen