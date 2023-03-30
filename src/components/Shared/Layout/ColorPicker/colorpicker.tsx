import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Drawer, Button, Box } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CatButtons, DudeButtons, HearingAidButtons, FunkyButtons } from "./Buttons/colorpicker-buttons";


interface ColorPickerProps {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    imageString: string;
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

export const ColorPicker = ({ drawerOpen, setDrawerOpen, imageString }: ColorPickerProps) => {
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
    changeColor("eyelids", color);
  };

  const handleClickGlasses = () => {
    changeColor("eyeglasses", color);
  };

  const handleClickOuter = () => {
    changeColor("hearingaid-outer", color)
  };

  const handleClickInner = () => {
    changeColor("hearingaid-inner", color);
  };

  const handleClickEyes = () => {
    changeColor("iris", color);
  };

  const handleClickJewellery = () => {
    changeColor("jewellery", color);
  };

  const handleClickBeard = () => {
    changeColor("beard", color);
  };

  const handleClickUnderCut = () => {
    changeColor("undercut", color)
  }

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

  const renderButtons = () => {
    if (imageString === "WhatTheCat") {
      return <CatButtons 
      handleClickHair={handleClickHair}
      handleClickEyes={handleClickEyes}
      />;
    } else if (imageString === "DudeLela") {
      return (
        <>
      <DudeButtons 
      handleClickHair={handleClickHair}
      handleClickBeard={handleClickBeard}
      handleClickGlasses={handleClickGlasses}
      handleClickShirt={handleClickShirt}
      />
      <HearingAidButtons 
      handleClickOuter={handleClickOuter}
      handleClickInner={handleClickInner}
      />
      </>
      )
    } else if (imageString === "FunkyLela") {
      return (
        <>
      <FunkyButtons 
      handleClickHair={handleClickHair}
      handleClickUnderCut={handleClickUnderCut}
      handleClickGlasses={handleClickGlasses}
      handleClickJewellery={handleClickJewellery}
      handleClickShirt={handleClickShirt}
      />
      <HearingAidButtons 
      handleClickOuter={handleClickOuter}
      handleClickInner={handleClickInner}
      />
      </>
      )
      }
      else {
      return null;
    }
  };


  return (
    <>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="left">
        <Box width="300px" padding="1rem" textAlign="center">
          <Box display="flex" justifyContent="center">
            <HexColorPicker color={color} onChange={handleColorChange} />
          </Box>
          {renderButtons()}
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
          {/* <Typography variant="h6" gutterBottom>
            Hair
          </Typography>
          <Button onClick={handleClickHair}>
          {isCat ? "Change Fur Color" : "Change Hair Color"}
          </Button>
          {isDudeLela && (
          <>
            <Typography variant="h6" gutterBottom>
              Beard
            </Typography>
            <Button onClick={handleClickBeard}>Change Beard Color</Button>
          </>
        )}
          <Typography variant="h6" gutterBottom>
            Makeup
          </Typography>
          <Button onClick={handleClickLips}>Lipstick</Button>
          <Button onClick={handleClickEyeLids}>Eyeshadow</Button>
         
          <Button onClick={handleClickHearingAids}>Change Hearingaids Color</Button>*/}