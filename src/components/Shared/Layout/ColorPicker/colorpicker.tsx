import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Drawer, Button, Box } from "@mui/material";

interface ColorPickerProps {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
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