import styles from './styles.module.css'
import plus from '../../assets/mais.svg'
import { useState, useEffect } from 'react'
import Task from '../../components/Task'


interface typeTask {
    id:number
    texto:string
}

interface ColumnsTasks {
    fazer: typeTask[]
    andamento: typeTask[]
    testando: typeTask[]
    terminado: typeTask[]
}

export default function KanbanMain() {
    
    const [task, setTask] = useState<ColumnsTasks>({
        fazer: [],
        andamento: [],
        testando: [],
        terminado: [],
    })
    
    function onHandle(column: keyof ColumnsTasks) {
        const newTask: typeTask = {
            id: task[column].length+1,
            texto: "Nova tarefa"
        }
        setTask({...task,[column]:[...task[column], newTask]})
    }

    function addTask(column:keyof ColumnsTasks, id: number, texto:string) {
        const newTask = task[column].map((t) =>
            t.id == id? {...t, texto} : t
        )

        setTask({...task, [column]:newTask})
    }

    function deleteTask(column: keyof ColumnsTasks, id: number) {
        const filtered = task[column].filter((t) => t.id !== id)
        setTask({ ...task, [column]: filtered })
    }

    
    return (
        <main id={styles.container}>
            <h1>Tarefas</h1>
            <div id={styles.kanban_board}>
                <div className={styles.kanban_to_do} >
                    <div className={styles.kanban_titulo}>
                        <div id={styles.titulo_to_do}></div>
                        <h2>Fazer</h2>
                    </div>
                    <div className={styles.kanban_task} onClick={()=> onHandle('fazer')}>
                        <img src={plus} alt="icone de mais" />
                        <p>Adicionar nova tarefa</p>
                    </div>

                    <Task taskList={task.fazer} onChangeText={(id,texto) => addTask('fazer',id,texto)} onDelete={(id) => deleteTask('fazer', id)}/>
    
                </div>
                <div className={styles.kanban_in_progress}>
                    <div className={styles.kanban_titulo}>
                        <div id={styles.titulo_in_progress}></div>
                        <h2>Em andamento</h2>
                    </div>
                    <div className={styles.kanban_task} onClick={()=> onHandle('andamento')}>
                        <img src={plus} alt="icone de mais" />
                        <p>Adicionar nova tarefa</p>
                    </div>
                    <Task taskList={task.andamento} onChangeText={(id,texto) => addTask('andamento',id,texto)} onDelete={(id) => deleteTask('andamento', id)}/>
                    
                </div>
                <div className={styles.kanban_test}>
                    <div className={styles.kanban_titulo}>
                        <div id={styles.titulo_test}></div>
                        <h2>Testando</h2>
                    </div>
                    <div className={styles.kanban_task} onClick={()=> onHandle('testando')}>
                        <img src={plus} alt="icone de mais" />
                        <p>Adicionar nova tarefa</p>
                    </div>
                    <Task taskList={task.testando} onChangeText={(id,texto) => addTask('testando',id,texto)} onDelete={(id) => deleteTask('testando', id)}/>
                </div>
                <div className={styles.kanban_finish}>
                    <div className={styles.kanban_titulo}>
                        <div id={styles.titulo_finish}></div>
                        <h2>Terminado</h2>
                    </div>
                    <div className={styles.kanban_task} onClick={()=> onHandle('terminado')}>
                        <img src={plus} alt="icone de mais" />
                        <p>Adicionar nova tarefa</p>
                    </div>
                     <Task taskList={task.terminado} onChangeText={(id,texto) => addTask('terminado',id,texto)} onDelete={(id) => deleteTask('terminado', id)} />
                </div>
            </div>
        </main>
    )
}