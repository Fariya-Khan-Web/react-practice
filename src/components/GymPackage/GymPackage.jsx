
import { PropTypes } from 'prop-types';

const Package = ({option}) => {
    const {id, name, price, features} = option
    return(
        <div className='text-white bg-blue-400 text-center flex flex-col m-5 p-5 rounded-lg font-medium'>
            <h1><span className='text-6xl'>{price}</span>/month</h1>
            <h2 className='text-2xl font-bold my-4'>{name}</h2>
            <div className='text-start flex-grow'>
                {
                    features.map(item => <li key={id} className='my-2-1'> {item} </li>)
                }
            </div>
            <button className='w-full py-2 bg-rose-400 hover:bg-rose-500 rounded-lg'>Buy Now</button>
        </div>
    )

}

Package.propTypes ={
    option: PropTypes.object
}

export default Package 