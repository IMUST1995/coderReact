import Card from "../Card/Card";
import './Products.css'
/* const style = {
    div: {
        display: 'flex',
        margin: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#1488CC',
    }
} */
const Products = () => {
    return(
        <div className='products'>
            <Card name={'Whey Protein'} brand={'Optimun Nutrition'} price={69.95} stock={5}/>
            <Card name={'Beta Alanine'} brand={'Nutricost'} price={30} stock={10}/>
            <Card name={'Creatine Monohidrated'} brand={'Bulk Suplements'} price={50} stock={0}/>
            <Card name={'Isolate Protein'} brand={'Optimun Nutrition'} price={80} stock={2}/>
        </div>
    )
}
export default Products