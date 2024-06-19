import { changeColor } from "./colorpicker";

//OnClick handlers that takes in a color string and sets the color depending on the className. Every handleClick is then passed as props to colorpicker-button.tsx
export const handleClickHair = (color: string) => {
    changeColor("hair", color);
};
  
export const handleClickFineHair = (color: string) => {
  changeColor("fine-hair", color, true);
}

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

export const handleClickGlassesTint = (color: string) => {
  changeColor("eyeglasses-glasses", color);
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
  
export const handleClickRuby = (color: string) => {
  changeColor("ruby", color);
};

export const handleClickBeard = (color: string) => {
    changeColor("beard", color);
  };

export const handleClickUnderCut = (color: string) => {
    changeColor("undercut", color);
};

export const handleClickHat = (color: string) => {
  changeColor("hat", color);
};

export const handleClickHairbands = (color: string) => {
  changeColor("hairband", color);
};

export const handleClickHairPaint = (color: string) => {
  changeColor("hair-paint", color);
};

export const handleClickShirtPaint = (color: string) => {
  changeColor("shirt-paint", color);
}

export const handleClickLipsPaint = (color: string) => {
  changeColor("lips-paint", color);
};

export const handleClickFacePaint = (color: string) => {
  changeColor("face-paint", color);
};
