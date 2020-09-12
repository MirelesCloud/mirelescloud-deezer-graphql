import * as React from 'react'
import { useChartListQuery } from '../../generated/graphql'
import ChartList from './ChartList'

const ChartListContainer = () => {
  const { data, error, loading } = useChartListQuery();
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error :(</div>
  }
  console.log(data)
  return <ChartList data={data}/>
}

export default ChartListContainer


