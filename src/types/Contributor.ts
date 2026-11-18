export type Contributor = {
  ContributorId : number;
  Slug: string;
  Name: string;
  SortName: string;
  Homepage: string | null;
  About: string | null;
}

export type ContributorIndex = {
  ContributorId: number;
  Slug: string;
  Name: string;
}