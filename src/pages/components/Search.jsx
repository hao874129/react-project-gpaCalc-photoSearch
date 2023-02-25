import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <Stack direction="row" justifyContent="center" alignItems="stretch">
      <Box
        sx={{
          width: 400,
          maxWidth: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 400,
            backgroundColor: '#374157', margin: '3rem 1rem 5rem 1rem'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1,color:'#d1dddb' }}
            placeholder="搜尋相片"
            onChange={inputHandler}
          />
          <IconButton type="button" sx={{ p: '10px' ,color:'#d1dddb'  }} aria-label="search" onClick={search} >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </Stack>
  );
}

export default Search;