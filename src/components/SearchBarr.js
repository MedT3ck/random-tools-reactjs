import { useState } from 'react'
const SearchBarr = (props) => {
    const [ValueMe, setValueMe] = useState('')
    const functionKey = (event) => {
     
        setValueMe(event.target.value)
    }
    const clear = () => {
     
        setValueMe('')
    }

   

    const filteredArray = props.products.filter((product) => {
        return product.includes(ValueMe)
    })

    return (
        <div>
            <input placeholder='Filter Throgh list items' className='form-control input' type='text' value={ValueMe} onChange={functionKey} />
           { ValueMe!=='' && 
                <button className='btn' onClick={clear}> Clear</button>
                }
           
            <ul className='form-control task'>
            {filteredArray.map((product) => {
                return <li key={ product}>{ product}</li>
            })
            }
            </ul>
           
            
           
        </div>
    )
}

export default SearchBarr
