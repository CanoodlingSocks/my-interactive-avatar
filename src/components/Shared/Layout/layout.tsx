import Grid from '@mui/material/Grid';
import Header from './Header/header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
<>
  <Header />
  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minWidth:"100&", minHeight:"80vh", display:"flex", flexDirection:"column", justifyContent:"center"}}
>
        <Grid item xs={3} md={4}>
        <Outlet />
        </Grid>
    </Grid>
  </>
)
export default Layout;