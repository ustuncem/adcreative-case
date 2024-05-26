import {useQuery} from '@tanstack/react-query';
import {getCharacters} from 'rickmortyapi';

import {GET_CHARACTERS_QUERY_KEY} from '../constants';

export default function useGetCharacters() {
  return useQuery({
    queryKey: [GET_CHARACTERS_QUERY_KEY],
    queryFn: async () => {
      const {data} = await getCharacters();

      return data;
    },
  });
}
