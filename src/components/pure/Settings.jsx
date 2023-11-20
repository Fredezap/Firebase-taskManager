import React from 'react';
import { motion } from 'framer-motion'
import { Scale } from '@mui/icons-material';

const Settings = ( {Appmode, toggleMode}) => {
    return (
        <div>
            <hr style={{ margin:"20px", border:"solid 1px" }} />
            <div className='toggle-mode'>
                {Appmode ? <h4>Mode: Dark</h4> : <h4>Mode: Light</h4>}
                <motion.button 
                    className='btn btn-secondary'
                    onClick={toggleMode}
                    whileHover={{ scale: 1.1 }}
                    >
                    Cambiar Modo
                </motion.button>
            </div>
        </div>
    );
}

export default Settings;
