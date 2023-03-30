import { CatButtons, DudeButtons, HearingAidButtons, FunkyButtons, MakeupButtons, StandardButtons, RinguMsg, GreenGablesButtons, RockerButtons, NoGlassesButtons, AnimuButtons } from "../Buttons/colorpicker-buttons";
import {
  handleClickHair, handleClickBeard, handleClickEyelids, handleClickEyes, handleClickGlasses, handleClickInner, handleClickJewellery, handleClickLips, handleClickOuter, handleClickShirt, handleClickUnderCut, handleClickHat, handleClickHairbands, handleClickGlassesTint
} from "../onClick-handlers";

//This function renders buttons dynamically based on the value of the imageString prop, and passes in the appropriate handleClick props with a color parameter.

export const RenderButtons = (imageString: string, color: string) => {
  if (imageString === "WhatTheCat") {
    return <CatButtons handleClickHair={() => handleClickHair(color)} handleClickEyes={() => handleClickEyes(color)} />;
  }
  else if (imageString === "DudeLela") {
    return (
      <>
        <DudeButtons handleClickHair={() => handleClickHair(color)} handleClickBeard={() => handleClickBeard(color)} handleClickGlasses={() => handleClickGlasses(color)} handleClickShirt={() => handleClickShirt(color)} />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
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
    return (
      <>
        <RinguMsg />
      </>
    )
  }
  else if (imageString === "LelaOfGreenGables") {
    return (
      <>
        <GreenGablesButtons handleClickHair={() => handleClickHair(color)} handleClickHat={() => handleClickHat(color)}
          handleClickHairbands={() => handleClickHairbands(color)} handleClickShirt={() => handleClickShirt(color)}
        />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else if (imageString === "Rockin'Lela") {
    return (
      <>
        <RockerButtons handleClickHair={() => handleClickHair(color)} handleClickGlasses={() => handleClickGlasses(color)}
          handleClickGlassesTint={() => handleClickGlassesTint(color)}
          handleClickHairbands={() => handleClickHairbands(color)} handleClickShirt={() => handleClickShirt(color)} />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else if (imageString === "PoofyLela") {
    return (
      <>
        <NoGlassesButtons handleClickHair={() => handleClickHair(color)}
          handleClickShirt={() => handleClickShirt(color)} />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else if (imageString === "VulcanLela") {
    return (
      <>
        <NoGlassesButtons handleClickHair={() => handleClickHair(color)}
          handleClickShirt={() => handleClickShirt(color)} />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else if (imageString === "FreshlyShoweredLela") {
    return (
      <>
        <NoGlassesButtons handleClickHair={() => handleClickHair(color)}
          handleClickShirt={() => handleClickShirt(color)} />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
      </>
    )
  }
  else if (imageString === "AnimuLela") {
    return (
      <>
        <AnimuButtons handleClickHair={() => handleClickHair(color)}
          handleClickUnderCut={() => handleClickUnderCut(color)}
          handleClickGlasses={() => handleClickGlasses(color)} handleClickJewellery={() => handleClickJewellery(color)} 
          handleClickHat={() => handleClickHat(color)}
          handleClickShirt={() => handleClickShirt(color)}
        />
         <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else if (imageString === "ChildLela") {
    return (
      <>
        <NoGlassesButtons handleClickHair={() => handleClickHair(color)}
          handleClickShirt={() => handleClickShirt(color)} />
          <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
  else {
    return (
      <>
        <StandardButtons handleClickHair={() => handleClickHair(color)} handleClickGlasses={() => handleClickGlasses(color)}
          handleClickShirt={() => handleClickShirt(color)}
        />
        <MakeupButtons handleClickLips={() => handleClickLips(color)} handleClickEyelids={() => handleClickEyelids(color)} />
        <HearingAidButtons handleClickOuter={() => handleClickOuter(color)} handleClickInner={() => handleClickInner(color)} />
      </>
    )
  }
};