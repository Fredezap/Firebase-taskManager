import React from 'react';

const TaskPageDetail = ({tasks}) => {

    if (!tasks) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h1>Task detail</h1>
            <h2>{tasks[0].title}</h2>
            <h2>{tasks[0].id}</h2>
            <h2>{tasks[0].description}</h2>
        </div>
    );
}

export default TaskPageDetail;
