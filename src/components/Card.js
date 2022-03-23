const style = {
    card: {
        display: 'flex',
        margin: '1rem',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 150,
    }
}
function Card(props){
    return(
            <div style={style.card}>
                <h2>{props.name}</h2>
                <h4>{props.brand}</h4>
                <p>$ {props.price}</p>
                <button>Lo quiero!</button>
            </div>
    )
}

export default Card