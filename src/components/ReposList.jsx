import ReposItem from './ReposItem';

const ReposList = ({ repos, error }) => {
  if (error) {
    return <h2 className='notify'> Error!</h2>;
  }

  return (
    <>
      {typeof repos === 'string' ? (
        <h2 className='notify'>{repos}</h2>
      ) : (
        <div className='repo__wrapper'>
          {repos.map((repo, index) => (
            <ReposItem key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default ReposList;
