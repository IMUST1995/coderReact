import { flexbox } from "@mui/system";
import Card from "./Card";
const style = {
    div: {
        display: 'flex',
        margin: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
}
function Products(){
    return(
        <div style={style.div}>
            <Card name={'Whey Protein'} brand={'Optimun Nutrition'} price={69.95}/>
            <Card name={'Beta Alanine'} brand={'Nutricost'} price={30}/>
            <Card name={'Creatine Monohidrated'} brand={'Bulk Suplements'} price={50}/>
            <Card name={'Isolate Protein'} brand={'Optimun Nutrition'} price={80}/>
        </div>
    )
}
export default Products