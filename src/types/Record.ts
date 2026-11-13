export type Record = {
  // All
  RecordId: string;
  RecordType: string;
  MediaFormat: string;
  DocumentTitle: string;
  Abstract: string | null;
  Description: string | null;
  Sources: string | null;
  // Text Documents and Recordings
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
  StorageKey: string | null;
  Caption: string | null; // Can be Abstract
  // Admin
  Rights: string | null;
  Notes: string | null;
  PublicationStatus: 'draft' | 'published';
};
