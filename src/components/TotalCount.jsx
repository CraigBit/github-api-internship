const TotalCount = ({ repos, error, isLoading, totalCount }) => {
  if (typeof repos === 'object' && repos.length > 0 && !error && !isLoading) {
    return <h2>{`Total results: ${totalCount}`}</h2>;
  }
};

export default TotalCount;
