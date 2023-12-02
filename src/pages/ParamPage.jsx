import React from 'react'
import { useParams } from 'react-router-dom'

const data =[
  {id:1, fact:"lorem1",description:"lorem1"},
  {id:2, fact:"lorem2",description:"lorem2"},
  {id:3, fact:"lorem3",description:"lorem3"},
]

const ParamPage = () => {
    const param = useParams()

    const fact = data.find(fact => fact.id === param.id)
    if(!fact){
      return <div>Fact not found</div>
    }
  return (
    <div>
        <h1>{fact.description}</h1>
    </div>
  )
}

export default ParamPage