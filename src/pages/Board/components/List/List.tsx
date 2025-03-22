import { ICard } from "../../../../common/interfaces/ICard";

type ListProperties = {
    title:string;
    cards: ICard[]
}
const List = (props: ListProperties) => {
    return( 
    <>
        <h2>{props.title}</h2>
        <ol>
            {props.cards.map(({id, title}) =>{
                return <li key={id}>
                    {title}
                  </li>
            })}
        </ol>
    </>)
}

export default List;