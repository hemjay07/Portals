import { Theme } from '@models/Theme';
import { FunctionComponent } from 'react';
import { TimelineOutlineItem } from './timeline-outline';
interface OutlineItemListModel {
    handleSelection: (index: number, id?: string) => void;
    items: TimelineOutlineItem[];
    theme: Theme;
}
/**
 * OutlineItemList component
 * This component is responsible for rendering the outline list of items.
 * It takes a list of items, a theme, and a selection handler function as props,
 * and maps through the items to render each one within the list.
 *
 * @property {TimelineOutlineItem[]} items - The items to be displayed in the list.
 * @property {Theme} theme - The theme object, used for styling.
 * @property {function} handleSelection - The callback to be invoked when an item is selected.
 * @returns {JSX.Element} The rendered OutlineItemList component.
 */
declare const OutlineItemList: FunctionComponent<OutlineItemListModel>;
export { OutlineItemList };
