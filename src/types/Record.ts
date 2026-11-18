export type Record = {
  // Identity
  RecordId: number;
  Slug: string;

  // General
  RecordType: string; // Photo, letter, broadcast, article
  MediaFormat: string; // image, audio, video, text, files
  DocumentTitle: string; // what the item is called
  Abstract: string | null;  // what the item contains
  Description: string | null; // additional context about the item
  Sources: string | null;

  // Text
  OriginalLanguage: string | null;
  OriginalText: string | null;
  TranslatedText: string | null;

  // Dates
  DateCreated: string | null;
  DatePublished: string | null;
  DatesCoveringStart: string | null;
  DatesCoveringEnd: string | null;
  DateAdded: string;
  DateUpdated: string;

  // External Reference
  InternetArchiveLink: string | null;

  // Media
  StorageKey: string | null; // Not every record is in R2
  Caption: string | null; // what the viewer sees

  // Administration
  Rights: string | null;
  Notes: string | null;
  PublicationStatus: 0 | 1;
};
