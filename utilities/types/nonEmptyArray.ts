// Source - https://stackoverflow.com/a/56006703
// Posted by jcalz, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-03, License - CC BY-SA 4.0

type NonEmptyArray<T> = [T, ...T[]];

export default NonEmptyArray;
