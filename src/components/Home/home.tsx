import Box from '@mui/material/Box'
import SelfiePicker, {SelfieType} from '../SelfiePicker/selfie-picker';
import Button from '@mui/material/Button';
import { useState } from "react";

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
            <Box
                display="flex"
                justifyContent="center"
                
            >
                <Button
                    variant="contained"
                    onClick={() => randomizeImg()}
                >
                    Change Me
                </Button>
            </Box>
        </>
    )
}

export default Home;

