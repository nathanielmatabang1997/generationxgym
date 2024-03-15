import SideBarList from "../Components/SideBarList"
import Layout from '../Layout/Layout'

const UpperList = () => {
  return(
    <Layout>
      <div className="container mx-auto  adjustPadding lg:mx-auto">

        <SideBarList/>

      </div>
    </Layout>
  )
}
export default UpperList