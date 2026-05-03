// Source - https://stackoverflow.com/a/69252250
// Posted by Grochni
// Retrieved 2026-05-03, License - CC BY-SA 4.0

type NonEmptyString<T extends string> = "" extends T ? never : T;

export default NonEmptyString;
