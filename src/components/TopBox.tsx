import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 20, md: 30 }}>
      <Grid size={12}> qqqqq</Grid>
        <Grid size={6}>
          {/* <Box sx={{ height: '100%', boxSizing: 'border-box' }}>Column 2</Box> */}
          <Box sx={{ backgroundColor: '#ccc', height: '100%', boxSizing: 'border-box', p: 2 }}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography component="legend">Uncontrolled</Typography>
                <Rating
                  name="simple-uncontrolled"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={2}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
          </Box>
        </Grid>
        <Grid size={6}>
                   <Box>
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography component="legend">Uncontrolled</Typography>
                <Rating
                  name="simple-uncontrolled"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={2}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
          </Box>
        </Grid>
</Grid>
  );
}
