import "./Coro5.css";
import { useState } from 'react';
export default function Coro5() {
    const a = [<div>
        <img src="./Images/coro1.webp" />
    </div>, "./Images/coro2.webp", "./Images/coro3.webp", "./Images/coro4.webp"];


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
        <div className="container-fluid d-flex justify-content-center mt-5 mb-3" >
            <button className="btn btn-dark"><h3>Milk Range</h3></button>
            <button className="btn"><h3 className="facecolor">Fase Mask</h3></button>
        </div>
        <div className="d-flex p-4" style={{ "width": "100%", "height": "80vh" }}>
            <button className="btn btn-dark per" onClick={less}><a>⬅</a></button>
            {/* <img className="cimg" src={a[slide]} /> */}

            <div>

                <div className="maincoro2">
                    <video className="img1" src="./Images/vid11.mp4" alt="" width={"100%"} style={{ "border-radius": "5%" }}/>
                    <div className="bodycoro2 mt-2">
                        <p>5<span>⭐</span>(1147 reviews)</p>
                        <h5>Sun Protection Combo</h5>
                        <p>The perfect summer duo for ultimate sun protectionn</p>
                        <h3>₹899</h3>
                        <p>You’ll save ₹50</p>
                    </div>
                </div>

            </div>
            
{/* 
            <div>

                <div className="maincoro2">
                    <video className="img2" src="./Images/vid22.mp4" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>4.7<span>⭐</span>(765 reviews)</p>
                        <h5>Skin Brightening Combo</h5>
                        <p>Get dewy brighter skin</p>
                        <h3>₹1,239</h3>
                        
                    </div>
                </div>

            </div> */}

            <div>

                <div className="maincoro2">
                    <video className="img3" src="./Images/vid3.mp4" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2  mt-2">
                        <p>4.8<span>⭐</span>(347 reviews)</p>
                        <h5>Skin Hydration Combo</h5>
                        <p>Hydrates & brightens dull skin</p>
                        <h3>₹1,125</h3>
                        <p>You’ll save ₹114</p>
                    </div>
                </div>

            </div>

            <div>

                <div className="maincoro2">
                    <video className="img4" src="./Images/vid4.mp4" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>4.5<span>⭐</span>(16 reviews)</p>
                        <h5>Hairfall Control Combo</h5>
                        <p>Controls hair fall and improves scalp health</p>
                        <h3>₹1,169</h3>
                        <p>You’ll save ₹71</p>
                    </div>
                </div>

            </div>

            {/* <div>

                <div className="maincoro2">
                    <video className="img5" src="./Images/vid5.mp4" alt="" width={"100%"} style={{ "border-radius": "5%" }} />
                    <div className="bodycoro2 mt-2">
                        <p>5<span>⭐</span>(131 reviews)</p>
                        <h5>Bestseller Hair Combo</h5>
                        <p>Moisturises hair and tackles frizziness</p>
                        <h3>₹1,114</h3>
                        <p>You'll save ₹131</p>
                    </div>
                </div>

            </div> */}
            
            <button className="btn btn-dark next" onClick={add}><a>➡</a></button>
        </div>

    </>)
}