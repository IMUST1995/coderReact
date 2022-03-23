import * as React from 'react';
import Button from '@mui/material/Button';
import Carrito from './Carrito';

const style = {
    container: {
        display: 'flex',
        alingItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3D7EAA'
    }
}
function NavBar(){
    return(
    <header style={style.container}>
        <div> 
            Lofo
        </div>
        <div>
            <Button className='boton' variant="contained">Contained</Button>
            <Button className='boton' variant="contained">Contained</Button>
            <Button className='boton' variant="contained">Contained</Button>
            <Carrito/>
        </div>
    </header>
    )
}

export default NavBar