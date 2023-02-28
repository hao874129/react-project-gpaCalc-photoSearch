import { useCallback } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Search = ({ setInput, search, isLoading, setIsLoading }) => {


  const inputHandler = useCallback((e) => {
    setInput(e.target.value)
  }, [setInput])

  const searchHandler = useCallback(() => {
    setIsLoading(true)
    search()
  }, [search, setIsLoading])


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
            sx={{ ml: 1, flex: 1, color: '#d1dddb' }}
            placeholder="搜尋相片"
            onChange={inputHandler}
          />
          {
            !isLoading && <IconButton type="button" sx={{ p: '10px', color: '#d1dddb' }} aria-label="search" onClick={searchHandler} >
              <SearchIcon />
            </IconButton>
          }

          {
            isLoading &&
            <CircularProgress disableShrink color="main-lighter" sx={{ margin: '.62rem .5rem .62rem 0' }} size="1.5rem" />
          }
        </Paper>
      </Box>
    </Stack>
  );
}

export default Search;