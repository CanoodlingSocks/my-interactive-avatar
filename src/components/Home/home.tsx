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

    const SelfieType: SelfieType = {
        randomImage: imageString
    }

    function randomizeImg() {
        const randomImage = images[Math.floor(images.length * Math.random())];
        setImageString(randomImage);
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
            >
                <SelfiePicker {...SelfieType} />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                m="2rem"
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

