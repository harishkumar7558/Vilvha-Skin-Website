


export default function Select(){


    return(
        <>
        <h3>Visit Us</h3>
        <div className="d-flex justify-content-around container-fluid mb-4 mt-4">
            <h4><a>Chennai</a></h4>
            <h4><a>Madurai</a></h4>
            <h4><a>Banglore</a></h4>
            <h4><a>Kochi</a></h4>
            <h4><a>Tirupur</a></h4>
        </div>
        <div className="d-flex">
            <div>
            <img className="" src="./Images/sel1.webp" alt="" width={"70%"} style={{"borderRadius":"20px 20px 20px 20px "}}/>
            <h4  className="mt-2"style={{"fontWeight":"700"}}>Vilvah Store</h4>
            <p style={{"fontWeight":"500"}}>Phone: +91 6381207449</p>

            </div>
            <div>
            <img src="./Images/sel2.webp" alt="" width={"70%"} style={{"borderRadius":"20px 20px 20px 20px "}}/>
            <h4 className="mt-2"style={{"fontWeight":"700"}}>Vilvah Store</h4>
            <p style={{"fontWeight":"500"}}>Phone: +91 8110024133</p>

            </div>
        </div>
        </>
    )
}