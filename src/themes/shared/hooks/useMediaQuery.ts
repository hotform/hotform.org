import React from 'react';

export interface UseMediaQueryConfig{
  defaultMatches?: boolean;
  matchMedia?: typeof window.matchMedia;
  noSsr?: boolean;
  query: string;
}

const matcher: RegExp = /^@media  ?/m;

const useMediaQuery = ({
  query: queryInput,
  defaultMatches = false,
  matchMedia = typeof window === 'undefined' ? undefined : window.matchMedia,
  noSsr = false
}: UseMediaQueryConfig): boolean => {
  const query = queryInput.replace(matcher, '');
  
  const getDefaultSnapshot = React.useCallback(() => defaultMatches, [defaultMatches]);
  
  const getServerSnapshot = React.useMemo(() => (
    noSsr && matchMedia
      ? () => matchMedia(query).matches
      : getDefaultSnapshot
  ), [
    getDefaultSnapshot,
    matchMedia,
    noSsr,
    query
  ]);
  
  const [ getSnapshot, subscribe ] = React.useMemo(() => {
    if(matchMedia){
      const mediaQueryList = matchMedia(query);
      return [
        () => mediaQueryList.matches,
        (listener: (e: MediaQueryListEvent) => void) => {
          mediaQueryList.addEventListener('change', listener);
          return () => {
            mediaQueryList.removeEventListener('change', listener);
          };
        },
      ];
    }
    return [
      getDefaultSnapshot,
      () => () => {}
    ];
  }, [
    getDefaultSnapshot,
    matchMedia,
    query
  ]);
  
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;