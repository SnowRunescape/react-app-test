import {useState, useEffect} from 'react'
import RoleAzul from '../components/RoleAzul'
import RoleRed from '../components/RoleRed'


export default ({layout}) => {
    if (layout == "default") {
        return <RoleAzul />
    }

    return <RoleRed />
}