import React from "react";
import { Global } from '@emotion/react';
import {
  SwipeableDrawer,
  Box,
  styled,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import BasicCard from "./Card";

const drawerBleeding = 265;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: 'black',
  }));
  
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'black',
  }));
  
  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? 'gray' : 'gray',
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

const Menu = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(88% - ${drawerBleeding}px)`,
              overflow: 'visible',

            },
          }}
        />
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding - 23,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: 'black' }}>5 results</Typography>
          </StyledBox>
          <StyledBox
            sx={{
                px: 2,
                pb: 2,
                height: '100vh',
                position: 'absolute',
                top: -drawerBleeding,
                visibility: 'visible',
                right: 0,
                left: 0,
            }}
          >
            {props.collectives.map((i) => <BasicCard collectives={i} setOpen={setOpen}/>)}
            {/* <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} />
            <BasicCard setOpen={setOpen} /> */}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    );
};

export default Menu;
