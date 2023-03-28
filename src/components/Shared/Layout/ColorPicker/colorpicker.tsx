import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Drawer, Button, Box } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


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
      const element = elements[i];
      if (!element.hasAttribute("data-color")) {
        // Store the original color as a data attribute
        element.setAttribute("data-color", element.style.fill);
      }
      element.style.fill = newColor;
    }
  }

  const handleClickHair = () => {
    changeColor("hair", color);
  };

  const handleClickShirt = () => {
    changeColor("shirt", color);
  };

  const handleClickLips = () => {
    changeColor("lips", color);
  };

  const handleClickEyeLids = () => {
    changeColor("eyeLids", color);
  };

  const handleClickGlasses = () => {
    changeColor("glasses", color);
  };

  const handleClickHearingAids = () => {
    changeColor("hearingaid-inner", color);
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
          <Typography variant="h6" gutterBottom>
            Hair
          </Typography>
          <Button onClick={handleClickHair}>Change Hair Color</Button>
          <Typography variant="h6" gutterBottom>
            Makeup
          </Typography>
          <Button onClick={handleClickLips}>Lipstick</Button>
          <Button onClick={handleClickEyeLids}>Eyeshadow</Button>
          <Typography variant="h6" gutterBottom>
            Clothing & Accessories
          </Typography>
          <Button onClick={handleClickGlasses}>Change Glasses Color</Button>
          <Button onClick={handleClickShirt}>Change Shirt Color</Button>
          <Button onClick={handleClickHearingAids}>Change Hearingaids Color</Button>
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