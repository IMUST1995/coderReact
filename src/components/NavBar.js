import * as React from 'react';
import CartWidget from './CartWidget/CardWidget'
const style = {
    container: {
        display: 'flex',
        alingItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2a1600',
        minHeight: '50px',
    }
}
function NavBar(){
    return(
    <header style={style.container}>
        <div> 
            Lofo
        </div>
        <CartWidget/>
    </header>
    )
}

export default NavBar