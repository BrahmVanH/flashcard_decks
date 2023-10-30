/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Card = {
  __typename?: 'Card';
  _id: Scalars['ID']['output'];
  prompt: Scalars['String']['output'];
  solution: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Deck = {
  __typename?: 'Deck';
  _id: Scalars['ID']['output'];
  cards?: Maybe<Array<Card>>;
  deckName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDeck: Deck;
  deleteDeck: Deck;
  updateDeck: Deck;
};


export type MutationCreateDeckArgs = {
  newDeck: NewDeck;
};


export type MutationDeleteDeckArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateDeckArgs = {
  deckId: Scalars['ID']['input'];
  newCards?: InputMaybe<Array<NewCard>>;
};

export type Query = {
  __typename?: 'Query';
  getAllDecks?: Maybe<Array<Deck>>;
  getDeckById?: Maybe<Array<Deck>>;
};


export type QueryGetDeckByIdArgs = {
  id: Scalars['ID']['input'];
};

export type NewCard = {
  prompt: Scalars['String']['input'];
  solution: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type NewDeck = {
  cards?: InputMaybe<Array<NewCard>>;
  title: Scalars['String']['input'];
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Card = {
  __typename?: 'Card';
  _id: Scalars['ID']['output'];
  prompt: Scalars['String']['output'];
  solution: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Deck = {
  __typename?: 'Deck';
  _id: Scalars['ID']['output'];
  cards?: Maybe<Array<Card>>;
  deckName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDeck: Deck;
  deleteDeck: Deck;
  updateDeck: Deck;
};


export type MutationCreateDeckArgs = {
  newDeck: NewDeck;
};


export type MutationDeleteDeckArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateDeckArgs = {
  deckId: Scalars['ID']['input'];
  newCards?: InputMaybe<Array<NewCard>>;
};

export type Query = {
  __typename?: 'Query';
  getAllDecks?: Maybe<Array<Deck>>;
  getDeckById?: Maybe<Array<Deck>>;
};


export type QueryGetDeckByIdArgs = {
  id: Scalars['ID']['input'];
};

export type NewCard = {
  prompt: Scalars['String']['input'];
  solution: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type NewDeck = {
  cards?: InputMaybe<Array<NewCard>>;
  title: Scalars['String']['input'];
};
