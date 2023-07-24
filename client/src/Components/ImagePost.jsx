import { NavLink } from "react-router-dom"

export const ImagePost =({image,size="postMedium"}) => {
    return(
        <div className="box">
           <NavLink to={"/post"}> <img src={image} className={size}/></NavLink>
            </div>
    )
}