import { changeColor } from "./colorpicker";

//OnClick handlers that takes in a color string and sets the color depending on the className. Every handleClick is then passed as props to colorpicker-button.tsx
export const handleClickHair = (color: string) => {
    changeColor("hair", color);
  };

export const handleClickShirt = (color: string) => {
    changeColor("shirt", color);
  };

 export const handleClickLips = (color: string) => {
    changeColor("lips", color);
  };

export  const handleClickEyelids = (color: string) => {
    changeColor("eyelids", color);
  };

export const handleClickGlasses = (color: string) => {
    changeColor("eyeglasses", color);
  };

export const handleClickOuter = (color: string) => {
    changeColor("hearingaid-outer", color)
  };

export const handleClickInner = (color: string) => {
    changeColor("hearingaid-inner", color);
  };

export const handleClickEyes = (color: string) => {
    changeColor("iris", color);
  };

export const handleClickJewellery = (color: string) => {
    changeColor("jewellery", color);
  };

export const handleClickBeard = (color: string) => {
    changeColor("beard", color);
  };

export const handleClickUnderCut = (color: string) => {
    changeColor("undercut", color)
  }