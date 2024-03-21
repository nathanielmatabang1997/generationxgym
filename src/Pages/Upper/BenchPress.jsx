import BenchImage from "../../Components/BenchImage"
import Layout from "../../Layout/Layout"

const BenchPress = () => {
  return(
    <Layout>
      <div className="container mx-auto adjustPadding pb-10">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <BenchImage/>
            <div className="-mt-2 md:-mt-14">
              <div className="flex justify-between items-center mx-2 ">
                <h1 className="font-bold">Bench Press</h1>
                <p>60</p>
              </div>           
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam, vero adipisci beatae eos facere accusantium repellendus sapiente repudiandae libero cupiditate commodi aspernatur debitis sed hic expedita fuga molestiae sit.</p>
            </div>
          </div>
          <div>
            details
          </div>

        </div>
      </div>
    </Layout>
  )
}
export default BenchPress
