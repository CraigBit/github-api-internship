const ReposItem = ({ repo, index }) => {
  return (
    <div className='repo'>
      <div>{index + 1}</div>
      <h4>
        Name (active link):{' '}
        <a href={repo.html_url} target='_blank'>
          {repo.name}
        </a>
      </h4>
      <p>ID: {repo.id}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks}</p>
    </div>
  );
};

export default ReposItem;
