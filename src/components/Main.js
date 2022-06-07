import backgroundImg from '../background.png';
import AnimalList from './AnimalList';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      
      {
        animals.map((animal, i) => <AnimalList key={animal.name + i} {...animal} />

        )
      }
    </main>
  );
}
