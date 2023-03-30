import { CatButtons, DudeButtons, HearingAidButtons, FunkyButtons } from "../Buttons/colorpicker-buttons";
import { 
  handleClickHair, handleClickBeard, handleClickEyeLids, handleClickEyes, handleClickGlasses, handleClickInner, handleClickJewellery, handleClickLips, handleClickOuter, handleClickShirt, handleClickUnderCut
} from "../onClick-handlers";

//Renders buttons dynamically depending on what the imageString is with all their respective handleClick props

export const RenderButtons = (imageString: string,color: string) => {
    if (imageString === "WhatTheCat") {
      return <CatButtons handleClickHair={() => handleClickHair(color)} handleClickEyes={() => handleClickEyes(color)} />;
    } 
    else if (imageString === "DudeLela") {
      return (
        <>
          <DudeButtons handleClickHair={() => handleClickHair(color)} handleClickBeard={() => handleClickBeard(color)} handleClickGlasses={() => handleClickGlasses(color)} handleClickShirt={() => handleClickShirt(color)} />
          <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
        </>
      )
    } 
    else if (imageString === "FunkyLela") {
      return (
        <>
        <FunkyButtons handleClickHair={() => handleClickHair(color)} handleClickUnderCut={() => handleClickUnderCut(color)} handleClickGlasses={() => handleClickGlasses(color)} handleClickJewellery={() => handleClickJewellery(color)} handleClickShirt={() => handleClickShirt(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
      )
      }
      else {
      return null;
    }
  };