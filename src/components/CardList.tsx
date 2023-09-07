import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { List, Button, ListSubheader } from '@mui/material';
import { ContentType } from 'thu-learn-lib';

import { downloadAllUnreadFiles, loadMoreCard } from '../redux/actions';
import { selectFilteredCardList } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { t } from '../utils/i18n';

import styles from '../css/list.module.css';
import ContentCard from './ContentCard';

const CardList = () => {
  const dispatch = useAppDispatch();
  const threshold = useAppSelector((state) => state.ui.cardVisibilityThreshold);
  const cards = useAppSelector(selectFilteredCardList);

  const [_onTop, setOnTop] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setOnTop(true);
    }
  }, [cards]);

  const filtered = cards.slice(0, threshold);
  const unreadFileCount = cards.reduce((count, c) => {
    if (c.type === ContentType.FILE && !c.hasRead) count += 1;
    return count;
  }, 0);
  const canLoadMore = threshold < cards.length;

  return (
    <div
      className={styles.card_list}
      onScroll={(ev) => {
        const self = ev.target as HTMLDivElement;
        setOnTop(self.scrollTop === 0);

        if (!canLoadMore) return;
        const bottomLine = self.scrollTop + self.clientHeight;
        if (bottomLine + 180 > self.scrollHeight) {
          // 80 px on load more hint
          dispatch(loadMoreCard());
        }
      }}
      ref={scrollRef}
    >
      <List
        className={styles.card_list_inner}
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            className={cn(styles.card_list_header, styles.card_list_header_floating)}
          >
            {unreadFileCount !== 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(downloadAllUnreadFiles(cards));
                }}
              >
                {t('Content_DownloadUnreadFiles', unreadFileCount?.toString())}
              </Button>
            )}
          </ListSubheader>
        }
      >
        {filtered.map((c) => (
          <ContentCard key={c.id} content={c} />
        ))}

        {filtered.length === 0 && (
          <div className={styles.card_list_load_more}>{t('Common_Nothing')}</div>
        )}

        {canLoadMore && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div className={styles.card_list_load_more} onClick={() => dispatch(loadMoreCard())}>
            {t('Common_LoadMore')}
          </div>
        )}
      </List>
    </div>
  );
};

export default CardList;
