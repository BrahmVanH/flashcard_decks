/* eslint-disable */
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
  prompt?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Deck = {
  __typename?: 'Deck';
  _id: Scalars['ID']['output'];
  cards?: Maybe<Array<Maybe<Card>>>;
  deckName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDeck?: Maybe<Deck>;
  deleteDeck?: Maybe<Deck>;
  updateDeck?: Maybe<Deck>;
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
  getAllDecks?: Maybe<Array<Maybe<Deck>>>;
  getDeckById?: Maybe<Array<Maybe<Deck>>>;
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
  cards?: InputMaybe<Array<InputMaybe<NewCard>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};
