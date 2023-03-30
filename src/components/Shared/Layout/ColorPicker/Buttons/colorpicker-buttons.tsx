import { CatButtonsProps, DudeButtonsProps, HearingAidButtonsProps, FunkyButtonsProps, MakeupButtonsProps, StandardButtonsProps } from "../Interfaces/button-interfaces";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

//These are sets of buttons that depending on what imageString parameter is passed to them will render dynamically and set the color of the corresponding element
export const HearingAidButtons = (props: HearingAidButtonsProps) => (
       <>
    <Typography variant="h6" gutterBottom>
    Hearingaid
    </Typography>
    <Button onClick={props.handleClickOuter}>Change Hearingaid Color</Button>
    <Button onClick={props.handleClickInner}>Change Earmold Color</Button>
    </>
)


export const MakeupButtons = (props: MakeupButtonsProps) => (
        <>
        <Typography variant="h6" gutterBottom>
        Makeup
        </Typography>
        <Button onClick={props.handleClickLips}>Lipstick</Button>
        <Button onClick={props.handleClickEyelids}>Eyeshadow</Button>
        </>
)


export const StandardButtons = (props: StandardButtonsProps) => (
    <>
    <Typography variant="h6"mt={2}>
      Hair
    </Typography>
    <Button onClick={props.handleClickHair}>Change Hair Color</Button>
    <Typography variant="h6">
    Glasses
      </Typography>
      <Button onClick={props.handleClickGlasses}>Change Glasses Color</Button>
      <Typography variant="h6" gutterBottom>
        Shirt
      </Typography>
      <Button onClick={props.handleClickShirt}>Change Shirt Color</Button>   
  </>
)

export const CatButtons = (props: CatButtonsProps) => (
    <>
      <Typography variant="h6"mt={2}>
        Fur
      </Typography>
      <Button onClick={props.handleClickHair}>Change Fur Color</Button>
      <Typography variant="h6" gutterBottom>
        Eyes
      </Typography>
      <Button onClick={props.handleClickEyes}>Change Eye Color</Button>
    </>
  );

export const DudeButtons = (
    props: DudeButtonsProps) => (
    <>
      <Typography variant="h6" mt={2}>
        Hair
      </Typography>
      <Button onClick={props.handleClickHair}>Change Hair Color</Button>
      <Typography variant="h6" gutterBottom>
        Beard
      </Typography>
      <Button onClick={props.handleClickBeard}>Change Beard Color</Button>
      <Typography variant="h6" gutterBottom>
        Glasses
      </Typography>
      <Button onClick={props.handleClickGlasses}>Change Glasses Color</Button>
      <Typography variant="h6" gutterBottom>
        Shirt
      </Typography>
      <Button onClick={props.handleClickShirt}>Change Shirt Color</Button>
    </>
  );
  
export const FunkyButtons = (props: FunkyButtonsProps) => (
<>
      <Typography variant="h6" mt={2}>
        Hair
      </Typography>
      <Button onClick={props.handleClickHair}>Change Hair Color</Button>
      <Button onClick={props.handleClickUnderCut}>Change Undercut Color</Button>
      <Typography variant="h6" gutterBottom>
        Glasses & Accessories
      </Typography>
      <Button onClick={props.handleClickGlasses}>Change Glasses Color</Button>
      <Button onClick={props.handleClickJewellery}>Change Piercings Color</Button>
      <Typography variant="h6" gutterBottom>
        Shirt
      </Typography>
      <Button onClick={props.handleClickShirt}>Change Shirt Color</Button>
    </>
)

export const RinguMsg = () => (
    <Typography variant="h6" mt={2} color="red">
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS 
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS
        SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS SEVEN DAYS 
    </Typography>
)