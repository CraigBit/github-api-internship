import { useState } from 'react';
import './App.css';
import ReposList from './components/ReposList';
import InputSearch from './components/UI/input/InputSearch';
import ButtonSearch from './components/UI/button/ButtonSearch';
import TotalCount from './components/TotalCount';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';
import RepoService from './API/RepoService';

function App() {
  const [repos, setRepos] = useState([]);
  const [totalCount, setTotalCount] = useState('');

  const [tempSearch, setTempSearch] = useState('');

  const [fetchRepos, isLoading, error, searchStart] = useFetching(
    async (tempSearch) => {
      const response = await RepoService.getReposByQuery(tempSearch);
      setRepos(response.data.items);
      if (!response.data.items.length) {
        setRepos('No results!');
      }
      setTotalCount(response.data.total_count);
    }
  );

  return (
    <div className='App'>
      <InputSearch
        placeholder='Search repos...'
        type='text'
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
      />
      <div className='menu__wrapper'>
        <ButtonSearch getRepos={fetchRepos} tempSearch={tempSearch}>
          Search
        </ButtonSearch>
        <TotalCount
          repos={repos}
          totalCount={totalCount}
          error={error}
          isLoading={isLoading}
        />
      </div>
      <hr />
      {searchStart ? <h2 className='notify'>Please start searching!</h2> : null}
      {isLoading ? <Loader /> : <ReposList repos={repos} error={error} />}
    </div>
  );
}

export default App;
