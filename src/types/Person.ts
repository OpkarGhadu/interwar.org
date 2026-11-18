export type Person = {
  PersonId: number;
  Slug: string;
  Name: string;
  SortName: string;
  Aliases: string | null;
  WikidataId: string | null;
  BirthDate: string | null;
  DeathDate: string | null;
  Abstract: string | null;
  Quote: string | null;
  QuoteSource: string | null;
  Biography: string | null;
  DateAdded: string;
  DateUpdated: string;
  PublicationStatus: 0 | 1;
};

export type PersonIndex = {
  PersonId: number;
  Slug: string;
  Name: string;
  SortName: string;
};

export type PersonPath = {
    PersonId: number;
    Slug: string;
};