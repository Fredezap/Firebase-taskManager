import '../../../styles/forms.css'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const TaskFormik = ({add}) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }
    
    const TaskSchema = Yup.object().shape (
        {
            name: Yup.string()
                .min(2, 'Task name too short')
                .max(20, 'Task name too long')
                .required('Task name is required'),
            description: Yup.string()
                .max(350, "Description too long"),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must choose a level')
                .required('Level is required')
        })

    const addTask = async (values) => {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        )
        await add(newTask);
    }

    const ErrorMessageStyle = {
        color: 'red'
    }

    return (
        <div className='create-new-task-formik'>
            <Formik
                initialValues = { initialValues }

                validationSchema = { TaskSchema }

                onSubmit={(values, { resetForm }) => {
                        addTask(values);
                        resetForm();
                    }
                }
            >

                    {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleBlur,
                    handleChange }) => (
                        <Form className='d-flex justify-content-center align-items-center addTaskForm'>
                        <div className='form-outline flex-fill'>
                        {!isSubmitting ? (
                            <div>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Your name" type="text" className='form-control form-control-lg'/>

                        {/* Password errors */}
                        { errors.name && touched.name && ( <ErrorMessage style={ErrorMessageStyle} name="name" component="div"></ErrorMessage> ) }

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={values.description}  // Asigna el valor del textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form-control form-control-lg'
                        />

                        {/* Password errors */}
                        { errors.description && touched.description && ( <ErrorMessage style={ErrorMessageStyle} name="description" component="div"></ErrorMessage> ) }

                        <label htmlFor="level" >Level</label>
                        <Field
                            id="level" name="level"
                            component="select"
                            className='form-control form-control-lg'>
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENT}>URGENT</option>
                                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                        </Field>

                        {/* Password errors */}
                        { errors.level && touched.level && ( <ErrorMessage style={ErrorMessageStyle} name="level" component="div"></ErrorMessage> ) }
                        
                        <button type="submit" className="btn btn-primary btn-lg ms-2 add-botton">Create new task</button>
                        </div>) :
                        (<div>Creando la nueva tarea</div>)}
                        </div>
                        </Form> 
                    )}
            </Formik>
        </div>
    );
}

export default TaskFormik;