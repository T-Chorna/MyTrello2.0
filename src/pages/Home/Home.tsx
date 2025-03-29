import { useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Board from "./components/Board/Board";
import styles from'./Home.module.scss';
import { Link } from "react-router-dom";


const componentData = {boards: [
    {id: 1, title: "покупки", custom: {background: "red"}},
    {id: 2, title: "підготовка до весілля", custom: {background: "green"}},
    {id: 3, title: "розробка інтернет-магазину", custom: {background: "blue"}},
    {id: 4, title: "курс по просуванню у соцмережах", custom: {background: "grey"}}
]}
const Home = () => {
    const [boards] = useState(componentData.boards);
    return (
        <div className={styles['home-page']}>
          <header>
            <Logo/>
            <Button title="Вийти"/>
          </header>
            <h1>Головна</h1>
            <ul>
              {boards.map(({id, title}) =>{
                return <li><Link to={`/board/${id}`}><Board key={id} title={title}/></Link></li>
                })}
            </ul>
            

            <Button title="Додати дошку" className="add-button"/>
        </div>
    )
}

export default Home;
