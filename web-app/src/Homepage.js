import models from './data';
import Pedelec from './Pedelec';

const Homepage = () => {
    return ( 
        <div>
            {models.map((model)=> (
                <div>
                    <Pedelec model={model} bike="Top Bikeee Model"/>
                </div>
            ))}
        </div>
        
     );
     
}
 
export default Homepage;