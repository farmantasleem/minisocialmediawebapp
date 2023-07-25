import { NavLink } from "react-router-dom"

export const ImagePost =({image,size="postMedium",_id}) => {
    return(
        <div className="box">
           <NavLink to={`/post/${_id}`}> <img src={image} className={size}/></NavLink>
            </div>
    )
}