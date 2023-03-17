import React from 'react';

const useMediaQuery = (query: string): boolean => {
  const [ match, setMatch ] = React.useState(false);
  
  if(typeof window === 'undefined') return false;
  
  const handleChange = React.useCallback((e: MediaQueryListEvent) => setMatch(e.matches), []);
  
  React.useEffect(() => {
    const mediaQueryList = matchMedia(query.replace(/^@media  ?/m, ''));
    
    setMatch(mediaQueryList.matches);
    
    mediaQueryList.addEventListener('change', handleChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    }
  }, [ query, handleChange ]);
  
  return match;
}

export default useMediaQuery;