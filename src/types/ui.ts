import { IconName } from '@fortawesome/fontawesome-common-types';
import { Dispatch } from 'redux';
import { ContentType, CourseInfo } from 'thu-learn-lib/lib/types';

import { ContentInfo } from './data';
import { SnackbarType } from './dialogs';

export interface IMenuItem {
  name: string;
  icon: IconName;
  type?: ContentType | null;
  handler?: (any) => any;
}

export interface IMenuItemEnum {
  [key: string]: IMenuItem;
}

interface IDispatchableComponentProps {
  dispatch?: Dispatch<any>;
}

interface ISummaryListProps extends IDispatchableComponentProps {
  numbers: {
    [key: string]: number;
  };
}

interface ICourseListProps extends IDispatchableComponentProps {
  courses: CourseInfo[];
}

interface ICardFilter {
  type: ContentType;
  course: CourseInfo;
}

interface ICardListProps extends IDispatchableComponentProps, Partial<ICardFilter> {
  contents: ContentInfo[];
  threshold: number;
  unreadFileCount: number;
  loadMore: () => any;
  downloadAllUnread: (contents: ContentInfo[]) => any;
}

interface ICardProps extends IDispatchableComponentProps {
  content: ContentInfo;
}

export type SummaryListProps = ISummaryListProps;

export type SettingListProps = IDispatchableComponentProps;

export type CourseListProps = ICourseListProps;

export type CardListProps = ICardListProps;

export type CardProps = ICardProps;

interface IAppProps extends IDispatchableComponentProps {
  showLoadingProgressBar: boolean;
  loadingProgress: number;
  paneHidden: boolean;
  cardListTitle: string;
  semesterTitle: string;
  latestSemester: boolean;
  openSidebar: () => any;
  closeSidebar: () => any;
  resetApp: () => any;
  setTitleFilter: (filter: string) => any;
  openChangeSemesterDialog: () => any;
}

export type AppProps = IAppProps;

interface IColoredSnackbarProps extends IDispatchableComponentProps {
  showSnackbar: boolean;
  snackbarContent: string;
  snackbarType: SnackbarType;
}

export type ColoredSnackbarProps = IColoredSnackbarProps;

interface IDetailPaneProps extends IDispatchableComponentProps {
  url: string;
  content?: ContentInfo;
  showIgnoreSettings: boolean;
  csrfToken: string
}

export type DetailPaneProps = IDetailPaneProps;

interface IContentIgnoreSettingProps extends IDispatchableComponentProps {
  ignoreState: {
    course: CourseInfo;
    ignore: {
      [contentType: string]: boolean;
    };
  }[];
}

export type ContentIgnoreSettingProps = IContentIgnoreSettingProps;

interface IContentDetailProps extends ICardProps {
  csrfToken: string
}

export type ContentDetailProps = IContentDetailProps;