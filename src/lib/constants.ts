export const RELATIONSHIPS = {
    CREATED_BY: 'created_by',       // Always a Person
    FEATURES: 'features',           // Always a Person
    ABOUT: 'about',                 // Always a Topic or Event
    PUBLISHED_BY: 'published_by',   // Always an Organization
} as const;


// Records
export const RECORD_TYPES = {
    PHOTOGRAPH: 'photograph',
    ARTICLE: 'article',
    BOOK: 'book',
    LETTER: 'letter',
    SPEECH: 'speech',
    BROADCAST: 'broadcast',
    INTERVIEW: 'interview',
    DIARY: 'diary',
    DOCUMENT: 'document',
    ANECDOTE: 'anecdote',
} as const;

export const MEDIA_FORMATS = {
    IMAGE: 'image',
    TEXT: 'text',
    AUDIO: 'audio',
    VIDEO: 'video',
} as const;

export const PUBLICATION_STATUSES = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
} as const;


// Organizations
export const ORGANIZATION_TYPES = {
    NEWSPAPER: 'newspaper',
    NEWS_AGENCY: 'news_agency',
    BROADCASTER: 'broadcaster',
    PUBLISHER: 'publisher',
    GOVERNMENT: 'government',
    POLITICAL_PARTY: 'political_party',
    MILITARY: 'military',
    RELIGIOUS: 'religious',
    OTHER: 'other',
} as const;