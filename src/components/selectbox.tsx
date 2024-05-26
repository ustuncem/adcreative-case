import {useGetCharacters} from '../hooks';

export default function Selectbox() {
  const charactersQuery = useGetCharacters();

  if (charactersQuery.isLoading || charactersQuery.isFetching) return <p>LOADING...</p>;

  console.log(charactersQuery.data?.results);
  return <div>selectbox</div>;
}
