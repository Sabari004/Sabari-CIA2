import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './ColorStyle.css'

const options = [
    {
        label:'Lime',
        value:'lime'
    },
    {
        label:'Lavender',
        value:'lavender'
    },
    {
        label:'Crimson',
        value:'crimson'
    },
    {
        label:'Darkblue',
        value:'darkblue'
    },
    {
        label:'Teal',
        value:'teal'
    },
    {
        label:'Rebecca Purple',
        value:'rebeccapurple'
    },
    {
        label:'Ghost White',
        value:'ghostwhite'
    },
    {
        label:'Aqua Marine',
        value:'aquamarine'
    },
    {
        label:'aliceblue',
        value:'aliceblue'
    },
];

export default function ColorSelect() {
  const [option, setOption] = React.useState('Lime');
//   const [name, setName] = React.useState('Lime');

  const handleChange = (event) => {
    setOption(event.target.value);
    // setName(event.target.value);
  };

  return (
    <>
    <h1>Color Changer</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-select-currency"
          select
          label="Color"
          value={option}
          onChange={handleChange}
      style={{color:option,backgroundColor:option }}

        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
    </Box >
    <h1>{option}</h1>
    <div className='Container' style={{backgroundColor:option}}>
    </div>
    </>
  );
}