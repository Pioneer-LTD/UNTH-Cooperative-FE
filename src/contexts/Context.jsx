import { useState } from "react";
import { appContext } from "./appContext";
import PropTypes from 'prop-types'

const Context = ({children}) => {
    // const [name, setNme] = useState('kennet')

  return (
   <appContext.Provider value={{}}>
    {children}
   </appContext.Provider>
  )
}

Context.propTypes ={
    children: PropTypes.node
}
export default Context