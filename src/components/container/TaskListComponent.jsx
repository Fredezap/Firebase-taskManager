import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/TaskComponent'
import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example 1', 'Description 1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING);

    const allTasks = [defaultTask1, defaultTask2, defaultTask3]

    const [tasks, setTasks] = useState(allTasks);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     console.log('Modificacion de tareas')
    //     setLoading(false)
    //     return () => {
    //         console.log('Componente de Lista de tareas va a ser desmontado')
    //     };
    // }, [tasks]);

    function completeTask (task) {
        console.log('cambiando una tarea', task)
        const index = tasks.indexOf(task);
        const allTasks2 = [...tasks]
        tasks[index].completed = !tasks[index].completed
        setTasks(allTasks2)
        console.log('tarea cambiada creo', task)
    }

    function deleteTask (task) {
        console.log('eliminando una tarea', task)
        const index = tasks.indexOf(task);
        const allTasks2 = [...tasks]
        allTasks2.splice(index,1);
        setTasks(allTasks2)
        console.log('tarea eliminada creo', task)
    }

    function addTask (task) {
        console.log('agregando una tarea', task)
        const allTasks2 = [...tasks]
        allTasks2.push(task);
        setTasks(allTasks2)
        console.log('tarea agregada creo', task)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th className='column1' scope='col'>Title</th>
                        <th className='column2' scope='col'>Description</th>
                        <th className='column3' scope='col'>Prioridad</th>
                        <th className='column4' scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                            key ={ index }
                            task={ task }
                            completeTask={ completeTask }
                            deleteTask={ deleteTask }>
                            </TaskComponent>                                
                        )
                    }   )}
                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0) {
        taskTable = <Table></Table>
    } else {
        taskTable = (
            <div>
                <h3>There are not tasks</h3>
                <h4>Please add one</h4>
            </div>
        )
    }

    return (
        <div className='task-list'>
            <div className='task-list-item'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h3>
                            Your tasks
                        </h3>
                        <div className='task-table'>
                            {taskTable}
                        </div>
                    </div>
                </div>
            </div>
            <div className='task-list-item'>
                <h3>
                    Create new task
                </h3>
                <TaskFormik add={ addTask }></TaskFormik>
            </div>
        </div>
    )
}

export default TaskListComponent
