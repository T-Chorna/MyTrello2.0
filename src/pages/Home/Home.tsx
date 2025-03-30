import { useEffect, useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Board from "./components/Board/Board";
import styles from'./Home.module.scss';
import { Link } from "react-router-dom";
import { getAllBoards } from "../../api/request";
import { HomePageBoard } from "../../common/interfaces/HomePageBoard";


const Home = () => {
    const [boards, setBoards] = useState<HomePageBoard[]>([]);

    const updateInformAboutBoards = async () => {
      const allBoards = await getAllBoards();
      console.log(allBoards);
      setBoards(allBoards);
    }

    useEffect(() => {
      updateInformAboutBoards();
    }, []);

    return (
        <div className={styles['home-page']}>
          <header>
            <Logo/>
            <Button title="Вийти"/>
          </header>
            <h1>Головна</h1>
            <ul>
              {boards.map(({id, title}) =>{
                return <li key={id}><Link to={`/board/${id}`}><Board title={title}/></Link></li>
                })}
            </ul>
            

            <Button title="Додати дошку" className="add-button"/>
        </div>
    )
}

export default Home;
