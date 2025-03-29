

type CardProperties = {
    title:string;
}
const Card = (props: CardProperties) => {
    return( 
        <li>{props.title}</li>
    )
}

export default Card;