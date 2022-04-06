import * as React from 'react';
import CartWidget from './CartWidget/CardWidget'
import ButtonNavbar from './buttonNavbar/buttonNavbar';

const style = {
    container: {
        display: 'flex',
        alingItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#2a1600',
        minHeight: '50px',
    }
}
function NavBar(){
    return(
    <header style={style.container}>
        <ButtonNavbar/>
        {/* <CartWidget/> */}
    </header>
    )
}

export default NavBar