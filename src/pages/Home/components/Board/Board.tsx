type BoardProps = {
    title:string;
}

const Board = (props: BoardProps) => {
    return (
        <h2>{props.title}</h2>
    )
}

export default Board;