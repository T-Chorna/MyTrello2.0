import { useState } from "react"
import List from "./components/List/List";
import Button from "../components/Button";
import Logo from "../components/Logo";

import styles from'./Board.module.scss';
import { useParams } from "react-router-dom";

const componentData = {title: "Моя тестова дошка",
    lists: [
      {
        id: 1,
        title: "Плани",
        cards: [
          {id: 1, title: "помити кота"},
          {id: 2, title: "приготувати суп"},
          {id: 3, title: "сходити в магазин"}
        ]
      },
      {
        id: 2,
        title: "В процесі",
        cards: [
          {id: 4, title: "подивитися серіал"}
        ]
      },
      {
        id: 3,
        title: "Зроблено",
        cards: [
          {id: 5, title: "зробити домашку"},
          {id: 6, title: "погуляти з собакой"} 
        ]
      },
      {
        id: 4,
        title: "Зроблено",
        cards: [
          {id: 7, title: "зробити домашку"},
          {id: 8, title: "погуляти з собакой"} 
        ]
      },
      {
        id: 5,
        title: "Зроблено",
        cards: [
          {id: 9, title: "зробити домашку"},
          {id:10, title: "погуляти з собакой"} 
        ]
      }
    ]
    }
const Board = () => {
    const [title, /*setTitle*/] = useState(componentData.title);
    const [lists, /*setLists*/] = useState(componentData.lists);

    const { board_id } = useParams()
    return (
        <div className={styles['board-page']}>
          <header>
            <Logo/>
            <Button title="Вийти"/>
          </header>
            <h1>{title + " "+ board_id}</h1>
            <ul>
              {lists.map(({id, title, cards}) =>{
                return <li>
                    <List key={id} title={title} cards={cards}/>
                  </li>
                })}
            </ul>
            

            <Button title="Додати дошку" className="add-button"/>
        </div>
    )
}

export default Board;
