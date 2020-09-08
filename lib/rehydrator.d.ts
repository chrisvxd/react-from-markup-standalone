/// <reference types="react" />
import ILoadedOptions from "./ILoadedOptions";
import IOptions from "./IOptions";
import IRehydrator from "./IRehydrator";
declare const rehydratableToReactElement: (el: Element, rehydrators: IRehydrator, options: ILoadedOptions) => Promise<import("react").ReactElement<any>>;
declare const rehydrateChildren: (el: Node, rehydrators: IRehydrator, options: ILoadedOptions) => Promise<{
    container: HTMLDivElement;
    rehydrated: import("react").ReactNode;
}>;
declare const _default: (container: Element, rehydrators: IRehydrator, options: IOptions) => Promise<void>;
export default _default;
export { IRehydrator, rehydratableToReactElement, rehydrateChildren };
