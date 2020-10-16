import * as React from 'react'
import { useChartListQuery } from '../../generated/graphql'
import ChartList, { OwnProps } from './ChartList'
import Spinner from '../Spinner'

const ChartListContainer = (props: OwnProps) => {
  const { data, error, loading } = useChartListQuery();
  
  if (loading) {
    return <div><Spinner/></div>
  }

  if (error || !data) {
    return <div>Error</div>
  }
  console.log(data)
  return <ChartList data={data} {...props}/>
}

export default ChartListContainer


