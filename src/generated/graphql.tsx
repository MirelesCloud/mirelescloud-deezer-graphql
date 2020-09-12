import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type Album = {
   __typename?: 'Album',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  nb_tracks?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  fans?: Maybe<Scalars['Int']>,
  release_date?: Maybe<Scalars['String']>,
  tracklist?: Maybe<Scalars['String']>,
  artist?: Maybe<Artist>,
};

export type Albums = {
   __typename?: 'Albums',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  artist?: Maybe<Artists>,
  position?: Maybe<Scalars['Int']>,
};

export type Artist = {
   __typename?: 'Artist',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['String']>,
  nb_album?: Maybe<Scalars['Int']>,
  np_fan?: Maybe<Scalars['Int']>,
  tracklist?: Maybe<Scalars['String']>,
};

export type Artists = {
   __typename?: 'Artists',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Chart = {
   __typename?: 'Chart',
  tracks?: Maybe<Array<Maybe<Tracks>>>,
  artists?: Maybe<Array<Maybe<Artists>>>,
  albums?: Maybe<Array<Maybe<Albums>>>,
  playlists?: Maybe<Array<Maybe<Playlists>>>,
};

export type Playlists = {
   __typename?: 'Playlists',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  chart?: Maybe<Chart>,
};

export type Track = {
   __typename?: 'Track',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  rank?: Maybe<Scalars['Int']>,
  release_date?: Maybe<Scalars['String']>,
  preview?: Maybe<Scalars['String']>,
  artist?: Maybe<Artist>,
  album?: Maybe<Album>,
};

export type Tracks = {
   __typename?: 'Tracks',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['String']>,
  artist?: Maybe<Artists>,
  album?: Maybe<Albums>,
  position?: Maybe<Scalars['Int']>,
};


export type ChartListQueryVariables = {};


export type ChartListQuery = (
  { __typename?: 'Query' }
  & { chart: Maybe<(
    { __typename?: 'Chart' }
    & { tracks: Maybe<Array<Maybe<(
      { __typename?: 'Tracks' }
      & Pick<Tracks, 'id' | 'title'>
      & { artist: Maybe<(
        { __typename?: 'Artists' }
        & Pick<Artists, 'picture' | 'name'>
      )> }
    )>>>, artists: Maybe<Array<Maybe<(
      { __typename?: 'Artists' }
      & Pick<Artists, 'id' | 'name' | 'picture' | 'position'>
    )>>>, albums: Maybe<Array<Maybe<(
      { __typename?: 'Albums' }
      & Pick<Albums, 'id' | 'title' | 'cover'>
      & { artist: Maybe<(
        { __typename?: 'Artists' }
        & Pick<Artists, 'name'>
      )> }
    )>>> }
  )> }
);


export const ChartListDocument = gql`
    query ChartList {
  chart {
    tracks {
      id
      title
      artist {
        picture
        name
      }
    }
    artists {
      id
      name
      picture
      position
    }
    albums {
      id
      title
      cover
      artist {
        name
      }
    }
  }
}
    `;
export type ChartListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChartListQuery, ChartListQueryVariables>, 'query'>;

    export const ChartListComponent = (props: ChartListComponentProps) => (
      <ApolloReactComponents.Query<ChartListQuery, ChartListQueryVariables> query={ChartListDocument} {...props} />
    );
    
export type ChartListProps<TChildProps = {}> = ApolloReactHoc.DataProps<ChartListQuery, ChartListQueryVariables> & TChildProps;
export function withChartList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChartListQuery,
  ChartListQueryVariables,
  ChartListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ChartListQuery, ChartListQueryVariables, ChartListProps<TChildProps>>(ChartListDocument, {
      alias: 'chartList',
      ...operationOptions
    });
};

/**
 * __useChartListQuery__
 *
 * To run a query within a React component, call `useChartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useChartListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChartListQuery({
 *   variables: {
 *   },
 * });
 */
export function useChartListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChartListQuery, ChartListQueryVariables>) {
        return ApolloReactHooks.useQuery<ChartListQuery, ChartListQueryVariables>(ChartListDocument, baseOptions);
      }
export function useChartListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChartListQuery, ChartListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChartListQuery, ChartListQueryVariables>(ChartListDocument, baseOptions);
        }
export type ChartListQueryHookResult = ReturnType<typeof useChartListQuery>;
export type ChartListLazyQueryHookResult = ReturnType<typeof useChartListLazyQuery>;
export type ChartListQueryResult = ApolloReactCommon.QueryResult<ChartListQuery, ChartListQueryVariables>;