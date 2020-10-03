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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type Album = {
   __typename?: 'Album',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  md5_image?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  cover_big?: Maybe<Scalars['String']>,
  cover_xl?: Maybe<Scalars['String']>,
  nb_tracks?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  fans?: Maybe<Scalars['Int']>,
  release_date?: Maybe<Scalars['String']>,
  tracklist?: Maybe<Scalars['String']>,
  artist?: Maybe<Artist>,
  tracks?: Maybe<Array<Maybe<Tracks>>>,
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
  picture_medium?: Maybe<Scalars['String']>,
  picture_big?: Maybe<Scalars['String']>,
  nb_album?: Maybe<Scalars['Int']>,
  nb_fan?: Maybe<Scalars['Int']>,
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
  track?: Maybe<Track>,
  album?: Maybe<Album>,
  artist?: Maybe<Artist>,
};


export type QueryTrackArgs = {
  id: Scalars['ID']
};


export type QueryAlbumArgs = {
  id: Scalars['ID']
};


export type QueryArtistArgs = {
  id: Scalars['ID']
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
  explicit?: Maybe<Scalars['Boolean']>,
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
  duration?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
};


export type AlbumDetailQueryVariables = {
  id: Scalars['ID']
};


export type AlbumDetailQuery = (
  { __typename?: 'Query' }
  & { album: Maybe<(
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'title' | 'cover' | 'cover_big' | 'cover_xl' | 'nb_tracks' | 'label' | 'rating' | 'fans' | 'release_date'>
    & { artist: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'name' | 'picture'>
    )>, tracks: Maybe<Array<Maybe<(
      { __typename?: 'Tracks' }
      & Pick<Tracks, 'id' | 'title' | 'preview' | 'duration' | 'explicit'>
    )>>> }
  )> }
);

export type ArtistDetailQueryVariables = {
  id: Scalars['ID']
};


export type ArtistDetailQuery = (
  { __typename?: 'Query' }
  & { artist: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'name' | 'picture' | 'nb_album' | 'nb_fan' | 'tracklist'>
  )> }
);

export type ChartListQueryVariables = {};


export type ChartListQuery = (
  { __typename?: 'Query' }
  & { chart: Maybe<(
    { __typename?: 'Chart' }
    & { tracks: Maybe<Array<Maybe<(
      { __typename?: 'Tracks' }
      & Pick<Tracks, 'id' | 'title' | 'preview' | 'explicit'>
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

export type TrackInfoQueryVariables = {
  id: Scalars['ID']
};


export type TrackInfoQuery = (
  { __typename?: 'Query' }
  & { track: Maybe<(
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'title' | 'duration' | 'release_date' | 'preview' | 'rank' | 'explicit'>
    & { artist: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'name' | 'picture' | 'picture_medium' | 'picture_big'>
    )>, album: Maybe<(
      { __typename?: 'Album' }
      & Pick<Album, 'id' | 'title' | 'cover' | 'cover_big'>
    )> }
  )> }
);


export const AlbumDetailDocument = gql`
    query AlbumDetail($id: ID!) {
  album(id: $id) {
    id
    title
    cover
    cover_big
    cover_xl
    nb_tracks
    label
    rating
    fans
    release_date
    artist {
      id
      name
      picture
    }
    tracks {
      id
      title
      preview
      duration
      explicit
    }
  }
}
    `;
export type AlbumDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AlbumDetailQuery, AlbumDetailQueryVariables>, 'query'> & ({ variables: AlbumDetailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AlbumDetailComponent = (props: AlbumDetailComponentProps) => (
      <ApolloReactComponents.Query<AlbumDetailQuery, AlbumDetailQueryVariables> query={AlbumDetailDocument} {...props} />
    );
    
export type AlbumDetailProps<TChildProps = {}> = ApolloReactHoc.DataProps<AlbumDetailQuery, AlbumDetailQueryVariables> & TChildProps;
export function withAlbumDetail<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AlbumDetailQuery,
  AlbumDetailQueryVariables,
  AlbumDetailProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AlbumDetailQuery, AlbumDetailQueryVariables, AlbumDetailProps<TChildProps>>(AlbumDetailDocument, {
      alias: 'albumDetail',
      ...operationOptions
    });
};

/**
 * __useAlbumDetailQuery__
 *
 * To run a query within a React component, call `useAlbumDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAlbumDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AlbumDetailQuery, AlbumDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<AlbumDetailQuery, AlbumDetailQueryVariables>(AlbumDetailDocument, baseOptions);
      }
export function useAlbumDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AlbumDetailQuery, AlbumDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AlbumDetailQuery, AlbumDetailQueryVariables>(AlbumDetailDocument, baseOptions);
        }
export type AlbumDetailQueryHookResult = ReturnType<typeof useAlbumDetailQuery>;
export type AlbumDetailLazyQueryHookResult = ReturnType<typeof useAlbumDetailLazyQuery>;
export type AlbumDetailQueryResult = ApolloReactCommon.QueryResult<AlbumDetailQuery, AlbumDetailQueryVariables>;
export const ArtistDetailDocument = gql`
    query ArtistDetail($id: ID!) {
  artist(id: $id) {
    id
    name
    picture
    nb_album
    nb_fan
    tracklist
  }
}
    `;
export type ArtistDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArtistDetailQuery, ArtistDetailQueryVariables>, 'query'> & ({ variables: ArtistDetailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ArtistDetailComponent = (props: ArtistDetailComponentProps) => (
      <ApolloReactComponents.Query<ArtistDetailQuery, ArtistDetailQueryVariables> query={ArtistDetailDocument} {...props} />
    );
    
export type ArtistDetailProps<TChildProps = {}> = ApolloReactHoc.DataProps<ArtistDetailQuery, ArtistDetailQueryVariables> & TChildProps;
export function withArtistDetail<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArtistDetailQuery,
  ArtistDetailQueryVariables,
  ArtistDetailProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ArtistDetailQuery, ArtistDetailQueryVariables, ArtistDetailProps<TChildProps>>(ArtistDetailDocument, {
      alias: 'artistDetail',
      ...operationOptions
    });
};

/**
 * __useArtistDetailQuery__
 *
 * To run a query within a React component, call `useArtistDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArtistDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArtistDetailQuery, ArtistDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<ArtistDetailQuery, ArtistDetailQueryVariables>(ArtistDetailDocument, baseOptions);
      }
export function useArtistDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArtistDetailQuery, ArtistDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArtistDetailQuery, ArtistDetailQueryVariables>(ArtistDetailDocument, baseOptions);
        }
export type ArtistDetailQueryHookResult = ReturnType<typeof useArtistDetailQuery>;
export type ArtistDetailLazyQueryHookResult = ReturnType<typeof useArtistDetailLazyQuery>;
export type ArtistDetailQueryResult = ApolloReactCommon.QueryResult<ArtistDetailQuery, ArtistDetailQueryVariables>;
export const ChartListDocument = gql`
    query ChartList {
  chart {
    tracks {
      id
      title
      preview
      explicit
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
export const TrackInfoDocument = gql`
    query TrackInfo($id: ID!) {
  track(id: $id) {
    id
    title
    duration
    release_date
    preview
    rank
    explicit
    artist {
      id
      name
      picture
      picture_medium
      picture_big
    }
    album {
      id
      title
      cover
      cover_big
    }
  }
}
    `;
export type TrackInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrackInfoQuery, TrackInfoQueryVariables>, 'query'> & ({ variables: TrackInfoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TrackInfoComponent = (props: TrackInfoComponentProps) => (
      <ApolloReactComponents.Query<TrackInfoQuery, TrackInfoQueryVariables> query={TrackInfoDocument} {...props} />
    );
    
export type TrackInfoProps<TChildProps = {}> = ApolloReactHoc.DataProps<TrackInfoQuery, TrackInfoQueryVariables> & TChildProps;
export function withTrackInfo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TrackInfoQuery,
  TrackInfoQueryVariables,
  TrackInfoProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TrackInfoQuery, TrackInfoQueryVariables, TrackInfoProps<TChildProps>>(TrackInfoDocument, {
      alias: 'trackInfo',
      ...operationOptions
    });
};

/**
 * __useTrackInfoQuery__
 *
 * To run a query within a React component, call `useTrackInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrackInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackInfoQuery, TrackInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackInfoQuery, TrackInfoQueryVariables>(TrackInfoDocument, baseOptions);
      }
export function useTrackInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackInfoQuery, TrackInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackInfoQuery, TrackInfoQueryVariables>(TrackInfoDocument, baseOptions);
        }
export type TrackInfoQueryHookResult = ReturnType<typeof useTrackInfoQuery>;
export type TrackInfoLazyQueryHookResult = ReturnType<typeof useTrackInfoLazyQuery>;
export type TrackInfoQueryResult = ApolloReactCommon.QueryResult<TrackInfoQuery, TrackInfoQueryVariables>;