import styles from'../Board/Board.module.scss';

interface ButtonProps {
    title: string
    className?: string
}

const Button = (props: ButtonProps) => {
    if(props.className){
        return <button className={styles[props.className]}>{props.title}</button>
    } else {
        return <button>{props.title}</button>
    }
    
}

export default Button;