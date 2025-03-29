import { ICard } from "../../../../common/interfaces/ICard";
import Button from "../../../components/Button";
import Card from "../Card/Card";

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
                return <Card key={id} title={title}/>
            })}
        </ol>
        <Button title="Додати картку" className="add-card-button"/>
    </>)
}

export default List;