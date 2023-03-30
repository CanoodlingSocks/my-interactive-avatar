import { CatButtonsProps, DudeButtonsProps, HearingAidButtonsProps } from "./button-interfaces";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

export const HearingAidButtons = (props: HearingAidButtonsProps) => {
   return(

       <>
    <Typography variant="h6" gutterBottom>
    Hearingaid
    </Typography>
    <Button onClick={props.handleClickOuter}>Change Hearingaid Color</Button>
    <Typography variant="h6" gutterBottom>
    Earmold
    </Typography>
    <Button onClick={props.handleClickInner}>Change Earmold Color</Button>
    </>
       )
}

export const CatButtons = (props: CatButtonsProps) => (
    <>
      <Typography variant="h6" gutterBottom>
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
      <Typography variant="h6" gutterBottom>
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
  
  export default DudeButtons;