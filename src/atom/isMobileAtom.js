import { atom, useAtom } from 'jotai';

export const isMobileAtom = atom((get) => {
    const isMobile = window.screen.width < 600;
    return isMobile;
  });
  
  export const useMobileScreen = () => useAtom(isMobileAtom);