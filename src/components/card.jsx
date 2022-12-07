import React from "react";
function Card({data}) {
    return (
        <div className='container'> 
            {data.map((item, index) => {
                return (
                        <div class={`card ${item.post}`} key={index} > 
                            <div class="card__img">
                                <img src = {item.img} alt="" /> 
                            </div>
                            <h2>{item.name}</h2>
                            <p>{item.position}</p>
                            <div class="card__social">
                                <a target="_black" href="https://www.facebook.com/CuongNv.2002/">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a target="_black" href="https://www.youtube.com/c/Nodemy">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a target="_black" href="https://www.tiktok.com/@manindev">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                                <a target="_black" href="https://github.com/namndwebdev/html-css-js-thuc-chien">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            <button>Contact me</button>
                        </div>
                    )                        
            })}
            
    </div>
    )
}
export default Card