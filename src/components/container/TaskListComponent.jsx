import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/TaskComponent'
import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'
import { addNewTask, getAllTasks, deleteTaskById, updateTaskbyId } from './../../firebase/taskController'

const TaskListComponent = () => {
    
    const allTasks = []

    const [tasks, setTasks] = useState(allTasks);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTasks();
    }, []);
    
    const tasksAsClassObjects = (tasksFromFirebase) => {
        const newArrayTasks = tasksFromFirebase.map((t) => {
            const newTask = new Task(t.id, t.name, t.description, t.completed, t.level);
            return newTask;
        });
        return newArrayTasks;
    };
    
    const getTasks = async () => {
        const tasksFromFirebase = await getAllTasks();
        const tasksAsObjects = tasksAsClassObjects(tasksFromFirebase);
        setTasks([...allTasks, ...tasksAsObjects]);
    };
    

    function updateTask (task) {
        updateTaskbyId(task.toObject())
        .then(async () => {
            getTasks();
        })
        .catch(e => console.error(e))
    }

    function deleteTask (task) {
        deleteTaskById(task.id)
        .then(async => {
            getTasks();
        })
        .catch(e => console.error(e))
    }

    function addTask(task) {
        addNewTask(task.toObject())
            .then(async () => {
                getTasks();
            })
            .catch(e => console.error(e));
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
                            updateTask={ updateTask }
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
