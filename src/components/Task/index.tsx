import styles from './styles.module.css'
import trash from '../../assets/lixo.svg'

interface typeTask {
    id:number
    texto:string
}

interface TaskProps {
    taskList: typeTask[]
    onChangeText: (id: number, texto: string) => void 
    onDelete: (id: number) => void
   
}

export default function Task({taskList, onChangeText, onDelete}: TaskProps) {
    return (
        <div className={styles.container}>
            {taskList.map((tasks) =>(
                <div key={tasks.id} className={styles.task}>
                    <img src={trash} alt="logo de lixo" onClick={() => onDelete(tasks.id)} />
                    <input type="text" value={tasks.texto} placeholder="Digite sua tarefa" onChange={(event) => onChangeText(tasks.id, event.target.value)}/>
                </div>

            ))
            }
        </div>
    )
}