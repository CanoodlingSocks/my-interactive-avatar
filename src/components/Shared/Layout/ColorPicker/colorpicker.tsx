import PaletteIcon from '@mui/icons-material/Palette';
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Drawer, Button, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ColorPickerProps, ColorPickerBtnProps } from './Interfaces/colorpicker-interfaces';
import { RenderButtons } from './Buttons/render-buttons';

  export function changeColor(className: string, newColor: string) {
    const elements = document.getElementsByClassName(
      className
    ) as HTMLCollectionOf<SVGElement>;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (!element.hasAttribute("data-color")) {
        // Store the original color as a data attribute
        element.setAttribute("data-color", element.style.fill);
      }
      element.style.fill = newColor;
    }
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

export const ColorPicker = ({ drawerOpen, setDrawerOpen, imageString }: ColorPickerProps) => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };
  

  function resetColors() {
    const elements = document.querySelectorAll("[data-color]");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as SVGElement;
      const originalColor = element.getAttribute("data-color");
      if (originalColor !== null) {
        element.style.fill = originalColor ?? "#000000";
      }
    }
    setColor("#000000");
  }

  return (
    <>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="left">
        <Box width="300px" padding="1rem" textAlign="center">
          <Box display="flex" justifyContent="center">
            <HexColorPicker color={color} onChange={handleColorChange} />
          </Box>
          {RenderButtons(imageString, color)}
        </Box> 
        <Box textAlign="center">
          <Button variant="contained" onClick={resetColors}>
            Reset
          </Button>
        </Box>
      </Drawer>
    </>
  );  
};