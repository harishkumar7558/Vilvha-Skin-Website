
import "./Birth.css";
export default function Birth(){

    return(
        <>
        <div className="d-flex justify-content-arround container p-5">
            <div>
                <img className="left" src="./Images/birth.jpg" width={"80%"} style={{"borderRadius":"20px 20px 20px 20px"}}/>
            </div>
            <div className="right text-start mt-5 w-50">
                <h6 className="righth6">it's story time</h6>
                <h3 className="righth3">The Birth Of Viveha</h3>
                <p>In 2017, the seeds of Vilvah were sown in a home kitchen. The first product our founder created was goat milk soap to treat her daughter’s eczema prone skin.</p>
                <p>The same year we launched our flagship retail store in coimbatore.</p>
            </div>
        </div>
        </>
    )
}