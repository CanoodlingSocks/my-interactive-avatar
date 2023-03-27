import SelfieIcon from "../Selfies/selfie-icon";
import EmoSelfieIcon from "../Selfies/emoselfie-icon";
import AnimuSelfieIcon from "../Selfies/animuselfie-icon";
import ShortHairSelfieIcon from "../Selfies/shorthairselfie-icon";
import BraidedSelfieIcon from "../Selfies/braidedselfie-icon";
import VulcanSelfieIcon from "../Selfies/vulcanselfie-icon";
import StraightHairSelfieIcon from "../Selfies/straighthairselfie-icon";
import BracesSelfieIcon from "../Selfies/bracesselfie-icon";
import CatIcon from "../Selfies/cat-icon";
import GreenGablesSelfieIcon from "../Selfies/greengablesselfie-icon";
import TheRingSelfieIcon from "../Selfies/theringselfie-icon";
import DudeSelfieIcon from "../Selfies/dudeselfie-icon";

type SelfieType = {
    randomImage: string
}

const SelfiePicker = (props: SelfieType) => {

const imageNames = props.randomImage

    switch (imageNames) {
        case "EmoLela":
            return <EmoSelfieIcon />
        case "Lela":
            return <SelfieIcon />
        case "AnimuLela":
            return <AnimuSelfieIcon />
        case "ShortHairLela":
            return <ShortHairSelfieIcon />
        case "BraidedLela":
            return <BraidedSelfieIcon />
        case "VulcanLela":
            return <VulcanSelfieIcon />
        case "StraightHairLela":
            return <StraightHairSelfieIcon />
        case "BracesLela":
            return <BracesSelfieIcon />
        case "WhatTheCat":
            return <CatIcon />
        case "LelaOfGreenGables":
            return <GreenGablesSelfieIcon />
        case "RinguLela":
            return <TheRingSelfieIcon />
        case "DudeLela":
            return <DudeSelfieIcon />
        default:
            return <SelfieIcon />
    }
}

export default SelfiePicker;