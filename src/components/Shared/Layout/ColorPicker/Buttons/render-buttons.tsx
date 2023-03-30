import { CatButtons, DudeButtons, HearingAidButtons, FunkyButtons, MakeupButtons, StandardButtons, RinguMsg } from "../Buttons/colorpicker-buttons";
import { 
  handleClickHair, handleClickBeard, handleClickEyelids, handleClickEyes, handleClickGlasses, handleClickInner, handleClickJewellery, handleClickLips, handleClickOuter, handleClickShirt, handleClickUnderCut
} from "../onClick-handlers";

//This function renders buttons dynamically based on the value of the imageString prop, and passes in the appropriate handleClick props with a color parameter.

export const RenderButtons = (imageString: string,color: string) => {
    if (imageString === "WhatTheCat") {
      return <CatButtons handleClickHair={() => handleClickHair(color)} handleClickEyes={() => handleClickEyes(color)} />;
    } 
    else if (imageString === "DudeLela") {
      return (
        <>
          <DudeButtons handleClickHair={() => handleClickHair(color)} handleClickBeard={() => handleClickBeard(color)} handleClickGlasses={() => handleClickGlasses(color)} handleClickShirt={() => handleClickShirt(color)} />
          <MakeupButtons handleClickLips={() => handleClickLips(color)}handleClickEyelids={() => handleClickEyelids(color)}/>
          <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
        </>
      )
    } 
    else if (imageString === "FunkyLela") {
      return (
          <>
        <FunkyButtons handleClickHair={() => handleClickHair(color)} 
        handleClickUnderCut={() => handleClickUnderCut(color)} 
        handleClickLips={() => handleClickLips(color)}
        handleClickGlasses={() => handleClickGlasses(color)} handleClickJewellery={() => handleClickJewellery(color)} handleClickShirt={() => handleClickShirt(color)} 
        />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
      )
      } 
      else if (imageString === "RinguLela") {
        return(
            <>
            <RinguMsg />
            </>
        )
      }
      else {
      return (
        <>
        <StandardButtons handleClickHair={() => handleClickHair(color)} handleClickGlasses={() => handleClickGlasses(color)}
        handleClickShirt={() => handleClickShirt(color)}
        />
        <MakeupButtons handleClickLips={() => handleClickLips(color)}handleClickEyelids={() => handleClickEyelids(color)}/>
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
        </>
      )
    }
  };