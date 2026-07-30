export interface ReleaseNoteEntry {
  version: string;
  date: string;
  ja: string[];
  en: string[];
}

export const RELEASE_NOTES: ReleaseNoteEntry[] = [
  {
    version: "0.2.44",
    date: "2026-07-30",
    ja: [
      "録音中のアップデート処理を避け、待機中に自動ダウンロードするよう改善しました",
      "アプリ終了や通信エラー後の録音・文字起こし・メモの復旧性を改善しました",
      "長時間録音で「このまま使う」を選んだ確認を記憶するようにしました",
      "Macでアプリ起動中にDockアイコンが表示されない問題を修正しました",
    ],
    en: [
      "Improved updates so downloads happen while idle without interrupting active recordings",
      "Improved recovery of recordings, transcripts, and notes after app exits or network errors",
      "Long recording confirmation is now remembered after choosing “Keep as is”",
      "Fixed an issue where the Dock icon could disappear while the app was running on Mac",
    ],
  },
  {
    version: "0.2.43",
    date: "2026-07-28",
    ja: [
      "音声ダウンロードが一部の環境で失敗する問題を修正しました",
      "アプリ情報画面とアップデート履歴を見やすく調整しました",
    ],
    en: [
      "Fixed an issue where audio downloads could fail in some environments",
      "Improved the app info screen and update history layout",
    ],
  },
  {
    version: "0.2.42",
    date: "2026-07-26",
    ja: [
      "アプリ情報画面から機能要望・アンケート・リリースノートを確認しやすくしました",
      "アンケートをアプリ内で1問ずつ回答できるようにしました",
      "招待コード付きのSNSシェア文を作成しやすくしました",
    ],
    en: [
      "Made feature requests, surveys, and release notes easier to access from the app info screen",
      "Added an in-app survey that can be answered one question at a time",
      "Made it easier to create social sharing text with your invite code",
    ],
  },
  {
    version: "0.2.41",
    date: "2026-07-25",
    ja: [
      "議事録を見たまま編集できるリッチな編集画面にしました",
      "AIに修正内容を伝えて議事録を更新できるようにしました",
      "セッションの音声ファイルを1本の音声としてダウンロードできるようにしました",
    ],
    en: [
      "Added a rich meeting notes editor that lets you edit notes as they appear",
      "Added AI-assisted revisions for updating meeting notes from written instructions",
      "Added audio download for saving a session as a single audio file",
    ],
  },
  {
    version: "0.2.40",
    date: "2026-07-24",
    ja: [
      "議事録内の誤変換をまとめて置換できるようにしました",
      "クラウド生成した議事録の日時がずれることがある問題を修正しました",
    ],
    en: [
      "Added bulk replacement for fixing misrecognized text in meeting notes",
      "Fixed an issue where cloud-generated meeting notes could show shifted meeting times",
    ],
  },
  {
    version: "0.2.39",
    date: "2026-07-24",
    ja: [
      "AIサポートからフォローメッセージやAI作業指示を作成しやすくしました",
      "議事録と文字起こしのエクスポート内容とファイル名を改善しました",
      "保存先が未確定のセッションを見分けやすくしました",
    ],
    en: [
      "Made it easier to create follow-up messages and AI work instructions from AI Support",
      "Improved exported meeting notes and transcripts, including default file names",
      "Made sessions with an undecided save destination easier to recognize",
    ],
  },
];
