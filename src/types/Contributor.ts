export type Contributor = {
  Id : number;
  Slug: string;
  Name: string;
  Homepage: string | null;
  About: string | null;
}

export type ContributorIndex = {
  Id: number;
  Slug: string;
  Name: string;
}