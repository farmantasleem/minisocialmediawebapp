export const ImagePost =({image,size="postMedium"}) => {
    return(
        <div className="box"><img src={image} className={size}/></div>
    )
}