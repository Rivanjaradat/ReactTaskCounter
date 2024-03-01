import React from 'react'

export default function Counter({count=2}) {
    let isLoading=false;
    if(isLoading){
        return( <div>loading...</div>);
    }
  return (
    <>
    <div>this is Counter{count}</div>
    </>
    
  )
}
