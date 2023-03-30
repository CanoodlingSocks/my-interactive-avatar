import Box from '@mui/material/Box'
import SelfiePicker, {SelfieType} from '../SelfiePicker/selfie-picker';
import Button from '@mui/material/Button';
import { useState } from "react";
import { ColorPicker, ColorPickerButton } from '../Shared/Layout/ColorPicker/colorpicker';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0077c2',
      },
    },
  });

const images = [
    "Lela",
    "EmoLela",
    "AnimuLela",
    "ShortHairLela",
    "BraidedLela",
    "VulcanLela",
    "StraightHairLela",
    "BracesLela",
    "LelaOfGreenGables",
    "WhatTheCat",
    "RinguLela",
    "DudeLela",
    "FunkyLela",
    "Rockin'Lela",
    "FreshlyShoweredLela",
    "PoofyLela",
    "ChildLela"
];

function Home() {


    const [imageString, setImageString] = useState<string>("Lela");
    const [displayedImageName, setDisplayedImageName] = useState<string>("Lela");
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

     //Make the colorpicker btn responsive
     const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

    const SelfieType: SelfieType = {
        randomImage: imageString
    }

    function randomizeImg() {
      let newImage;
      do {
        newImage = images[Math.floor(images.length * Math.random())];
      } while (newImage === displayedImageName);
      setImageString(newImage);
      setDisplayedImageName(newImage);
    }

    //Regex expression to split the img-namestring at the uppercased letters
    const formattedImageName = imageString.replace(/([A-Z])/g, ' $1');

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                height="400px"
            >
                <SelfiePicker {...SelfieType} />
            </Box>
            <Box
            textAlign="center"
            marginTop="120px"
            marginBottom="10px"
            marginLeft="40px"
            marginRight="40px"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '15px',
                padding: '2px',
    
                color: '#fff'
              }}
            >
             <h3>{formattedImageName}</h3>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" onClick={() => randomizeImg()}>
          Change Me
        </Button>
        <ColorPickerButton onClick={() => setDrawerOpen(true)} isMobile={isMobile} />
      </Box>
      <ColorPicker drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} imageString={imageString}/>
    </>
  )
}

export default Home;

