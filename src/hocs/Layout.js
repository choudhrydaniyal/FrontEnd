import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {get_profile,checkAuthenticated,load_user,get_trends, get_post} from '../actions/auth'
const Layout=({get_profile,    checkAuthenticated,get_trends, load_user,children,get_post})=> {
useEffect(()=>{
checkAuthenticated();
load_user();
get_trends();
get_post();
get_profile()
},)

    return (
        <div>
            {children}
        </div>
    )
}

export default connect(null,{get_profile,checkAuthenticated,load_user,get_trends,get_post})(Layout)
