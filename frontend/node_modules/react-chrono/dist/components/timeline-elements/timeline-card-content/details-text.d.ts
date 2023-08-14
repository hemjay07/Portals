import { ReactNode } from 'react';
import { TimelineContentModel } from '@models/TimelineContentModel';
declare const DetailsText: import("react").ForwardRefExoticComponent<Pick<TimelineContentModel, "detailedText" | "timelineContent"> & {
    cardActualHeight?: number;
    contentDetailsClass?: string;
    customContent?: ReactNode;
    detailsHeight?: number;
    gradientColor?: string;
    showMore?: boolean;
} & import("react").RefAttributes<HTMLDivElement>>;
export { DetailsText };
