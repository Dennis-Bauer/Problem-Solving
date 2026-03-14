// Source - https://stackoverflow.com/a/60762482
// Posted by Tomasz Gawel, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-14, License - CC BY-SA 4.0

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (...a: infer X) => void ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = {
	0: A;
	1: GrowToSize<T, Grow<T, A>, N>;
}[A["length"] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;
