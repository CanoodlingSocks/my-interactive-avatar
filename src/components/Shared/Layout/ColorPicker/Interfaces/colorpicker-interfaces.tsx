export interface ColorPickerProps {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    imageString: string;
  }

export interface ColorPickerBtnProps {
    onClick: () => void;
    isMobile: boolean;
  }