import "./Carosal.css";
import {useState} from 'react';
export default function Carosal(){
    const a=["./Images/coro1.webp","./Images/coro2.webp","./Images/coro3.webp","./Images/coro4.webp"];

    let [slide,setSlide]=useState(0);
    function add(){
        slide=slide+1;
        if(slide>a.length-1){
            setSlide(0);
        }else{
            setSlide(slide);
        }
    }
    function less(){
        slide=slide-1;
        if(slide<0){
            setSlide(a.length-1);
        }else{
            setSlide(slide);
        }
    }
    return(<>
    <div className="d-flex back">
        <button className="btn btn-dark per" onClick={less}><a>⬅</a></button>
        <img className="cimg" src={a[slide]}/>
        <button className="btn btn-dark next" onClick={add}><a>➡</a></button>    
    </div>
    </>)
}