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
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  getAllReview?: Maybe<Array<Review>>;
  getReview?: Maybe<Array<Review>>;
  getAllReservation: Array<Reservation>;
  getAllTooReservation: Array<Reservation>;
  getAllHotel?: Maybe<Array<Hotel>>;
  me?: Maybe<User>;
  helloWorld: Scalars['String'];
  getHotelByID: Hotel;
  reviewCount: Scalars['Int'];
  averageRating: Scalars['Float'];
  getMyMessages?: Maybe<Array<Message>>;
  getAllReservationsByHotelIDAndDateFilter?: Maybe<Array<Maybe<Reservation>>>;
};


export type QueryGetReviewArgs = {
  data: BaseReviewInput;
};


export type QueryGetAllHotelArgs = {
  data?: Maybe<GetAllHotelInput>;
};


export type QueryGetHotelByIdArgs = {
  data: HotelGetInput;
};


export type QueryGetMyMessagesArgs = {
  input: GetMessagesInput;
};


export type QueryGetAllReservationsByHotelIdAndDateFilterArgs = {
  data: ReservationInput;
};

export type Review = {
   __typename?: 'Review';
  id: Scalars['ID'];
  value: Scalars['Float'];
  title: Scalars['String'];
  text: Scalars['String'];
  likes: User;
  date: Scalars['DateTime'];
  user: User;
  hotel: Hotel;
};

export type User = {
   __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
  reviewLikes?: Maybe<Array<Review>>;
  reviews?: Maybe<Array<Review>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  profileImageUri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  images: Array<Image>;
};

export type Message = {
   __typename?: 'Message';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  message: Scalars['String'];
  sentBy: Scalars['ID'];
  user: User;
};


export type Image = {
   __typename?: 'Image';
  id: Scalars['ID'];
  uri: Scalars['String'];
  user: User;
};

export type Hotel = {
   __typename?: 'Hotel';
  id: Scalars['ID'];
  name: Scalars['String'];
  photos?: Maybe<Array<Photo>>;
  price: Scalars['String'];
  amenities?: Maybe<Array<Scalars['String']>>;
  reviews?: Maybe<Array<Review>>;
  rooms?: Maybe<Array<Room>>;
  loveCount?: Maybe<Scalars['Float']>;
  commentCount?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  zipCodeSuffix?: Maybe<Scalars['Float']>;
  weatherIconName?: Maybe<Scalars['String']>;
  distanceKm?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  weatherDescription?: Maybe<Scalars['String']>;
  reviewCount: Scalars['Int'];
  averageRating: Scalars['Float'];
};

export type Photo = {
   __typename?: 'Photo';
  id: Scalars['ID'];
  uri: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
};

export type Room = {
   __typename?: 'Room';
  id: Scalars['ID'];
  roomNumber: Scalars['String'];
  type: Scalars['String'];
  beds: Scalars['Float'];
  maxOccupancy: Scalars['Float'];
  costPerNight: Scalars['Float'];
  reserved?: Maybe<Array<Reservation>>;
  hotel: Hotel;
};

/** The reservation model */
export type Reservation = {
   __typename?: 'Reservation';
  id: Scalars['ID'];
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  user: User;
  room: Room;
};

export type BaseReviewInput = {
  value: Scalars['Float'];
  title: Scalars['String'];
  text: Scalars['String'];
  hotelId: Scalars['ID'];
  userId: Scalars['ID'];
  date?: Maybe<Scalars['DateTime']>;
};

export type GetAllHotelInput = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  dates?: Maybe<DateInputSimple>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  prices?: Maybe<PriceRangeInput>;
  amenities?: Maybe<Array<Maybe<Amenity>>>;
};

export type DateInputSimple = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type PriceRangeInput = {
  low?: Maybe<Scalars['Int']>;
  high?: Maybe<Scalars['Int']>;
};

export type Amenity = {
  name?: Maybe<Array<Scalars['String']>>;
};

export type HotelGetInput = {
  hotelId: Scalars['ID'];
};

export type GetMessagesInput = {
  sentBy: Scalars['String'];
  user: Scalars['String'];
};

export type ReservationInput = {
  dates: DateInput;
  userId: Scalars['String'];
  hotelId: Scalars['String'];
};

export type DateInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  hotelId: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createReview: Review;
  createReservation: Reservation;
  createHotel: Hotel;
  createUser: User;
  changePasswordFromContextUserid?: Maybe<User>;
  changePasswordFromToken?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register: User;
  addProfilePicture: UploadProfilePictueReturnType;
  editUserInfo: User;
  adminEditUserInfo: UserClassTypeWithReferenceIds;
  addNewMessage: Scalars['Boolean'];
  signS3: SignedS3Payload;
  signS3GetObject: SignedS3Payload;
};


export type MutationCreateReviewArgs = {
  data: BaseReviewInput;
};


export type MutationCreateReservationArgs = {
  data: ReservationInput;
};


export type MutationCreateHotelArgs = {
  data: HotelInput;
};


export type MutationCreateUserArgs = {
  data: RegisterInput;
};


export type MutationChangePasswordFromContextUseridArgs = {
  data: PasswordInput;
};


export type MutationChangePasswordFromTokenArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationAddProfilePictureArgs = {
  data: UploadProfilePictureInput;
};


export type MutationEditUserInfoArgs = {
  data: EditUserInput;
};


export type MutationAdminEditUserInfoArgs = {
  data: EditUserInput;
};


export type MutationAddNewMessageArgs = {
  sentBy: Scalars['String'];
  message: Scalars['String'];
};


export type MutationSignS3Args = {
  files: Array<ImageSubInput>;
  action: S3SignatureAction;
};


export type MutationSignS3GetObjectArgs = {
  files: Array<FileInput>;
  action?: Maybe<S3SignatureAction>;
};

export type HotelInput = {
  name: Scalars['String'];
  photos?: Maybe<Array<PhotoInput>>;
  price: Scalars['String'];
  loveCount?: Maybe<Scalars['Float']>;
  commentCount?: Maybe<Scalars['Float']>;
  weatherIconName?: Maybe<Scalars['String']>;
  distanceKm?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  weatherDescription?: Maybe<Scalars['String']>;
};

export type PhotoInput = {
  uri: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
};

export type RegisterInput = {
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type UploadProfilePictureInput = {
  user: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
};

export type UploadProfilePictueReturnType = {
   __typename?: 'UploadProfilePictueReturnType';
  message: Scalars['String'];
  profileImgUrl: Scalars['String'];
};

export type EditUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  teamId: Scalars['ID'];
};

export type UserClassTypeWithReferenceIds = {
   __typename?: 'UserClassTypeWithReferenceIds';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
  reservations?: Maybe<Array<Reservation>>;
  reviewLikes?: Maybe<Array<Review>>;
  reviews?: Maybe<Array<Review>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  profileImageUri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ImageSubInput = {
  type: Scalars['String'];
  lastModified: Scalars['Float'];
  lastModifiedDate: Scalars['DateTime'];
  size: Scalars['Int'];
  name: Scalars['String'];
  webkitRelativePath: Scalars['String'];
  path: Scalars['String'];
};

/** The actions associated with obtaining a signed URL from S3 (get | put | delete) */
export enum S3SignatureAction {
  PutObject = 'putObject',
  GetObject = 'getObject'
}

export type SignedS3Payload = {
   __typename?: 'SignedS3Payload';
  signatures: Array<SignedS3SubPayload>;
};

export type SignedS3SubPayload = {
   __typename?: 'SignedS3SubPayload';
  uri: Scalars['String'];
  signedRequest: Scalars['String'];
};

export type FileInput = {
  id: Scalars['ID'];
  uri: Scalars['String'];
};

export type Subscription = {
   __typename?: 'Subscription';
  newMessage: MessageSubType;
};

export type MessageSubType = {
   __typename?: 'MessageSubType';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  sentBy: Scalars['String'];
  user: User;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageOutput = {
   __typename?: 'MessageOutput';
  message: Scalars['String'];
};

export type BaseListInput = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type GetFileObjectInput = {
  id: Scalars['ID'];
  uri: Scalars['String'];
};

export type HelloWorldQueryVariables = {};


export type HelloWorldQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'helloWorld'>
);


export const HelloWorldDocument = gql`
    query HelloWorld {
  helloWorld
}
    `;
export type HelloWorldComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HelloWorldQuery, HelloWorldQueryVariables>, 'query'>;

    export const HelloWorldComponent = (props: HelloWorldComponentProps) => (
      <ApolloReactComponents.Query<HelloWorldQuery, HelloWorldQueryVariables> query={HelloWorldDocument} {...props} />
    );
    
export type HelloWorldProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HelloWorldQuery, HelloWorldQueryVariables>
    } & TChildProps;
export function withHelloWorld<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloWorldQuery,
  HelloWorldQueryVariables,
  HelloWorldProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HelloWorldQuery, HelloWorldQueryVariables, HelloWorldProps<TChildProps, TDataName>>(HelloWorldDocument, {
      alias: 'helloWorld',
      ...operationOptions
    });
};

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, baseOptions);
      }
export function useHelloWorldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, baseOptions);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldQueryResult = ApolloReactCommon.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;