// declare namespace svelte.JSX {
//     interface HTMLProps<T> {
//         onclickOutside: () => void
//     }
// }
declare namespace svelte.JSX {
    interface DOMAttributes<T> {
        onclick_outside?: CompositionEventHandler<T>;
    }
}