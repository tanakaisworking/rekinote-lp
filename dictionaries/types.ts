// 共通辞書型定義
// 各コンポーネントで使う辞書のサブセット型

export type DictHeader = {
  benefits: string;
  features: string;
  integrations: string;
  compare: string;
  privacy: string;
  howItWorks: string;
  waitlist: string;
};

export type DictHero = {
  title1: string;
  title2: string;
  subtitle: string;
  desc: string;
  waitlist: string;
  mac: string;
  macSub: string;
  win: string;
  winSub: string;
};

export type DictProblemItem = { name: string; price: string };

export type DictProblem = {
  eyebrow: string;
  title1: string;
  title2: string;
  title3: string;
  desc: string;
  before: string;
  beforeTitle: string;
  beforeItems: DictProblemItem[];
  total: string;
  beforeTotal: string;
  beforeTotalDesc: string;
  after: string;
  afterTitle: string;
  afterDesc: string;
  afterItems: string[];
  afterTotal: string;
  afterTotalDesc: string;
};

export type DictFeaturesRow = { num: string; phase: string; title: string; body: string };
export type DictMemoryItem = { date: string; title: string; excerpt: string };

export type DictFeatures = {
  eyebrow: string;
  title1: string;
  title2: string;
  rows: DictFeaturesRow[];
  notificationTitle: string;
  notificationApp: string;
  notificationCalendar: string;
  notificationCalendarValue: string;
  notificationBtn: string;
  chatQuestion: string;
  chatAnswerLabel: string;
  chatAnswer: string;
  chatSource: string;
  memoryLabel: string;
  memoryItems: DictMemoryItem[];
};

export type DictApp = {
  name: string;
  slug?: string | null;
  icon?: string | null;
  fallback?: string | null;
};

export type DictWorksWith = {
  eyebrow: string;
  title: string;
  desc: string;
  apps: DictApp[];
};

export type DictCompare = {
  eyebrow: string;
  title1: string;
  title2: string;
  desc: string;
  colFeature: string;
  footnote: string;
  rows: string[][];
};

export type DictPrivacy = {
  eyebrow: string;
  title1: string;
  title2: string;
  facts: string[];
  providersLabel: string;
  providersDesc: string;
  providers: string[];
};

export type DictTranscriptLine = { time: string; speaker: string; color: string; text: string };
export type DictOutputCard = { title: string; body: string };

export type DictHowItWorks = {
  eyebrow: string;
  title1: string;
  title2: string;
  input01Label: string;
  input01Title: string;
  transcript: DictTranscriptLine[];
  input02Label: string;
  input02Title: string;
  calendarMeeting: string;
  calendarDate: string;
  calendarDateValue: string;
  calendarParticipants: string;
  calendarParticipantsValue: string;
  calendarTool: string;
  calendarNote: string;
  outputLabel: string;
  outputTitle: string;
  outputCards: DictOutputCard[];
};

export type DictFinalCTA = {
  title: string;
  desc: string;
  macSub: string;
  winSub: string;
  placeholder: string;
  btnLoading: string;
  btnDefault: string;
  successTitle: string;
  successDesc: string;
  errorDuplicate: string;
  errorGeneral: string;
};

export type DictFooter = {
  tagline: string;
  company: string;
};

export type Dictionary = {
  Header: DictHeader;
  Hero: DictHero;
  Problem: DictProblem;
  Features: DictFeatures;
  WorksWith: DictWorksWith;
  Compare: DictCompare;
  Privacy: DictPrivacy;
  HowItWorks: DictHowItWorks;
  FinalCTA: DictFinalCTA;
  Footer: DictFooter;
};
