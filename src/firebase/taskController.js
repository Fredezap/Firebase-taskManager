import { db } from './index';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const addNewTask = (task) => {
    return  addDoc(collection(db, 'tasks'), task);
}

export const getAllTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id  };
    });
    return tasks

}

export const deleteTaskById = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
}

export const updateTaskbyId = async (task) => {
    console.log("llamo")
    const dbTask = doc(db, "tasks", task.id);
    await updateDoc(dbTask, task);
}