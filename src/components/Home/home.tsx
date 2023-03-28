import Box from '@mui/material/Box'
import SelfiePicker, {SelfieType} from '../SelfiePicker/selfie-picker';
import Button from '@mui/material/Button';
import { useState } from "react";
import { ColorPicker } from '../Shared/Layout/ColorPicker/colorpicker';
import PaletteIcon from '@mui/icons-material/Palette';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
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
    "DudeLela"
];

function Home() {


    const [imageString, setImageString] = useState<string>("Lela");
    const [displayedImageName, setDisplayedImageName] = useState<string>("Lela");
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

    //Make the colorpicker btn responsive
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const SelfieType: SelfieType = {
        randomImage: imageString
    }

    function randomizeImg() {
        const randomImage = images[Math.floor(images.length * Math.random())];
        setImageString(randomImage);
        setDisplayedImageName(randomImage);
    }

    //Regex expression to split the img-namestring at the uppercased letters
    const formattedImageName = imageString.replace(/([A-Z])/g, ' $1');

    const handleColorPickerOpen = () => {
        setDrawerOpen(true);
    };

    const ResponsiveButton = styled(Button)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
          minWidth: 'initial',
          padding: theme.spacing(0.5),
        },
      }));

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
        <ResponsiveButton sx={{ ml: '10px' }} onClick={() => setDrawerOpen(true)}>
          {isMobile ? <PaletteIcon /> : 'COLORPICKER'}
        </ResponsiveButton>
      </Box>
      <ColorPicker drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  )
}

export default Home;

