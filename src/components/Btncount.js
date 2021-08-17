
import { useState } from "react"

const Btncount = (props) => {
    const [currentCount,setCurrentCount] = useState(0)
    
    const Mfacntion = async () => {
        setCurrentCount( currentCount + props.propName)

    }

    const styleText = {
        color: props.colorProp
    }
    return (
        <div>
            <button className='btn task' style={styleText} onClick={Mfacntion}>{props.anotherprop} + { props.propName}  </button>
            <div>{ currentCount}</div>
        </div>
    )
}

export default Btncount
