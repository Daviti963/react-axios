import styles from './Input.module.css'
interface Props {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ text, onChange }: Props) {
    return (
        <div>
            <input className={styles.input} type="text" value={text} onChange={onChange}/>
        </div>
    )
}