import * as React from 'react'
import { useChartListQuery } from '../../generated/graphql'
import ChartList, { OwnProps } from './ChartList'


const ChartListContainer = (props: OwnProps) => {
  const { data, error, loading } = useChartListQuery();
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }
  return <ChartList data={data} {...props}/>
}

export default ChartListContainer


