export type Contributor = {
  ContributorId : number;
  Slug: string;
  Name: string;
  Homepage: string | null;
  About: string | null;
}

export type ContributorIndex = {
  ContributorId: number;
  Slug: string;
  Name: string;
}