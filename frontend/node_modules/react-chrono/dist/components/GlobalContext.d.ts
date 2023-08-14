import { TimelineProps as PropsModel } from '@models/TimelineModel';
import { FunctionComponent } from 'react';
declare const GlobalContext: import("react").Context<PropsModel & {
    toggleDarkMode?: () => void;
}>;
declare const GlobalContextProvider: FunctionComponent<Partial<PropsModel>>;
export default GlobalContextProvider;
export { GlobalContext };
