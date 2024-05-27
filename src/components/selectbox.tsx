import Select from 'react-select';

import {useGetCharacters} from '#hooks';

const options = [
  {value: 'rick-sanchez', label: 'Rick Sanchez', episodes: 51},
  {value: 'black-rick', label: 'Black Rick', episodes: 2},
  {value: 'cool-rick', label: 'Cool Rick', episodes: 1},
  {value: 'cop-rick', label: 'Cop Rick', episodes: 1},
  {value: 'cowboy-rick', label: 'Cowboy Rick', episodes: 2},
  {value: 'mega-fruit-farmer-rick', label: 'Mega Fruit Farmer Rick', episodes: 1},
  {value: 'pickle-rick', label: 'Pickle Rick', episodes: 1},
];

const customStyles = {
  control: base => ({
    ...base,
    // Your custom styles for the control
  }),
  option: base => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    // Your custom styles for the option
  }),
};

const formatOptionLabel = ({label, episodes}) => (
  <div style={{display: 'flex', alignItems: 'center'}}>
    <img
      src={`path/to/${label.replace(' ', '-').toLowerCase()}.png`}
      alt={label}
      style={{width: 30, height: 30, marginRight: 10}}
    />
    <div>
      <div>{label}</div>
      <div style={{fontSize: 12, color: '#999'}}>{episodes} Episodes</div>
    </div>
  </div>
);

export default function Selectbox() {
  const charactersQuery = useGetCharacters();

  if (charactersQuery.isLoading || charactersQuery.isFetching) return <p>LOADING...</p>;

  console.log(charactersQuery.data?.results);
  return (
    <Select options={options} styles={customStyles} formatOptionLabel={formatOptionLabel} isMulti />
  );
}
