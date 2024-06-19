import OriginalLela from "../Selfies/original-lela";
import ArtsyLela from "../Selfies/artsy-lela";
import VampireLela from "../Selfies/vampire-lela";
import LowPolyLela from "../Selfies/low-poly-lela";
import OldLela from "../Selfies/old-lela";
import HotdogFingersLela from "../Selfies/hotdog-fingers-lela";
import ZombieLela from "../Selfies/zombie-lela";
import RockinLela from "../Selfies/rockin-lela";
import PoofyLela from "../Selfies/poofy-lela";
import ChildLela from "../Selfies/child-lela";
import FreshlyShoweredLela from "../Selfies/freshly-showered-lela";
import FunkyLela from "../Selfies/funky-lela";
import BracesLela from "../Selfies/braces-lela";
import RealisticLela from "../Selfies/realistic-lela";
import LelaOfGreenGables from "../Selfies/lela-of-green-gables";
import CatLela from "../Selfies/cat-lela";
import RinguLela from "../Selfies/ringu-lela";
import DudeLela from "../Selfies/dude-lela";
import BraidedLela from "../Selfies/braided-lela";
import ShortHairLela from "../Selfies/short-hair-lela";
import VulcanLela from "../Selfies/vulcan-lela";
import StraightHairLela from "../Selfies/straight-hair-lela";
import AnimuLela from "../Selfies/animu-lela";
import EmoLela from "../Selfies/emo-lela";

export type SelfieType = {
    randomImage: string
}

const SelfiePicker = (props: SelfieType) => {

    const imageNames = props.randomImage

    switch (imageNames) {
        case "Lela":
            return <OriginalLela />
        case "ArtsyLela":
            return <ArtsyLela />
        case "VampireLela":
            return <VampireLela />
        case "LowPolyLela":
            return <LowPolyLela />
        case "OldLela":
            return <OldLela />
        case "HotdogFingersLela":
            return <HotdogFingersLela />
        case "ZombieLela":
            return <ZombieLela />
        case "Rockin'Lela":
            return <RockinLela />
        case "PoofyLela":
            return <PoofyLela />
        case "ChildLela":
            return <ChildLela />
        case "FreshlyShoweredLela":
            return <FreshlyShoweredLela />
        case "FunkyLela":
            return <FunkyLela />
        case "BracesLela":
            return <BracesLela />
        case "RealisticLela":
            return <RealisticLela />
        case "EmoLela":
            return <EmoLela />
        case "AnimuLela":
            return <AnimuLela />
        case "BraidedLela":
            return <BraidedLela />
        case "VulcanLela":
            return <VulcanLela />
        case "StraightHairLela":
            return <StraightHairLela />
            case "LelaOfGreenGables":
                return <LelaOfGreenGables />
        case "CatLela":
            return <CatLela />
        case "RinguLela":
            return <RinguLela />
        case "DudeLela":
            return <DudeLela />
        case "ShortHairLela":
            return <ShortHairLela />
        default:
            return <OriginalLela />
    }
}

export default SelfiePicker;