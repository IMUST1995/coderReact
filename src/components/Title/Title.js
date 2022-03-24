import './Title.css'
/* const style = {
    title: {
        textAlign: 'center',
        margin: '0px, 3rem',
    }
} */
const Title = ({children}) => {
    return(
        <h1> {children} </h1>
    )
}

export default Title