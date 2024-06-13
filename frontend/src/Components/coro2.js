import "./Coro2.css";
import { useState } from 'react';
export default function Coro2() {
    const a = [<div>
        <img src="./Images/coro1.webp" />
    </div>, "./Images/coro2.webp", "./Images/coro3.webp", "./Images/coro4.webp"];

    // const a = [
    //     <div class="card" style="width:400px">
    //         <img class="card-img-top" src="./Images/coro1.webp" alt="Card image" />
    //         <div class="card-body">
    //             <h4 class="card-title">John Doe</h4>
    //             <p class="card-text">Some example text.</p>
    //             <a href="#" class="btn btn-primary">See Profile</a>
    //         </div>
    //     </div>, <div class="card" style="width:400px">
    //         <img class="card-img-top" src="./Images/coro1.webp" alt="Card image" />
    //         <div class="card-body">
    //             <h4 class="card-title">John Doe</h4>
    //             <p class="card-text">Some example text.</p>
    //             <a href="#" class="btn btn-primary">See Profile</a>
    //         </div>
    //     </div>


    let [slide, setSlide] = useState(0);
    function add() {
        slide = slide + 1;
        if (slide > a.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide);
        }
    }
    function less() {
        slide = slide - 1;
        if (slide < 0) {
            setSlide(a.length - 1);
        } else {
            setSlide(slide);
        }
    }
    return (<>
        <div className="container-fluid d-flex mt-5 mb-3" >
            <h3 style={{ "margin-left": "48%" }}>Best Sellers</h3>
            <a href="#" style={{ "margin-left": "28%","color":"black" }}>View All<button className="btn btn-danger rounded-circle ms-3">≫</button></a>
        </div>
        <div className="d-flex p-4" style={{ "width": "100%", "height": "80vh" }}>
            <button className="btn btn-dark per" onClick={less}><a>⬅</a></button>
            {/* <img className="cimg" src={a[slide]} /> */}

            <div>

                <div className="maincoro2">
                    <img className="img1" src="./Images/flip1.webp" alt="" width={"100%"} style={{ "border-radius": "5%" }}/>
                    <div className="bodycoro2 mt-2">
                        <p>5<span>⭐</span>(1147 reviews)</p>
                        <h5>Milk Drops Brightening Serum</h5>
                        <p>Brightens skin and combats hyperpigmentation</p>
                        <h3>₹640</h3>
                    </div>
                </div>

            </div>

            <div>

                <div className="maincoro2">
                    <img className="img2" src="./Images/flip2.webp" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>4.7<span>⭐</span>(765 reviews)</p>
                        <h5>Goatmilk Shampoo</h5>
                        <p>Repairs dry , frizzy hair</p>
                        <h3>₹550<span className="strike">₹590</span></h3>
                        <p>You'll save ₹40</p>
                    </div>
                </div>

            </div>

            <div>

                <div className="maincoro2">
                    <img className="img3" src="./Images/flip3.webp" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2  mt-2">
                        <p>4.8<span>⭐</span>(347 reviews)</p>
                        <h5>Milk Mud Mask</h5>
                        <p>Removes tan and gives brighter skin</p>
                        <h3>₹499</h3>
                    </div>
                </div>

            </div>

            <div>

                <div className="maincoro2">
                    <img className="img4" src="./Images/flip4.webp" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>4.5<span>⭐</span>(137 reviews)</p>
                        <h5>Hair growth oil</h5>
                        <p>Reduces Hairfall, Promotes Hairgrowth</p>
                        <h3>₹650</h3>
                    </div>
                </div>

            </div>

            <div>

                <div className="maincoro2">
                    <img className="img5" src="./Images/flip5.webp" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>4.9<span>⭐</span>(367 reviews)</p>
                        <h5>Aloevera Gel</h5>
                        <p>Hydration boost for skin and Hair</p>
                        <h3>₹390</h3>
                    </div>
                </div>

            </div>




            <button className="btn btn-dark next" onClick={add}><a>➡</a></button>
        </div>

    </>)
}