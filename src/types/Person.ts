export type Person = {
  PersonId: string;
  Name: string;
  SortName: string;
  Aliases: string | null;
  WikidataId: string | null;
  BirthDate: string | null;
  DeathDate: string | null;
  Biography: string | null;
  Abstract: string | null;
  Quote: string | null;
  QuoteSource: string | null;
  LastUpdated: string;
};


export type PersonIndex = {
  PersonId: string;
  Name: string;
  SortName: string;
};