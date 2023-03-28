import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Drawer, Button, Box } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import { styled } from '@mui/material/styles';

interface ColorPickerProps {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface ColorPickerBtnProps {
    onClick: () => void;
    isMobile: boolean;
  }

export const ColorPickerButton = ({ onClick, isMobile }: ColorPickerBtnProps) => {
    const ResponsiveButton = styled(Button)(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        minWidth: 'initial',
        padding: theme.spacing(0.5),
      },
    }));

    return (
        <ResponsiveButton sx={{ ml: '10px' }} onClick={onClick}>
          {isMobile ? <PaletteIcon /> : 'COLORPICKER'}
        </ResponsiveButton>
      );
    }

export const ColorPicker = ({ drawerOpen, setDrawerOpen }: ColorPickerProps) => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  function changeColor(className: string, newColor: string) {
    const elements = document.getElementsByClassName(
      className
    ) as HTMLCollectionOf<SVGElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fill = newColor;
    }
  }

  return (
    <>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}anchor="left">
        <Box width="300px" padding="1rem">
          <HexColorPicker color={color} onChange={handleColorChange} />
        </Box>
      </Drawer>
    </>
  );
};