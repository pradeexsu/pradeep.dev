import { GetServerSideProps, GetServerSidePropsContext } from "next";
import path from "path";
import { Character, GetCharacterResults } from "../../types/type";

function CharacterPage({ character }: { character: Character }) {
  return (
    <div>
      <div className="bg-pink-100 m-4 rounded p-3 flex" key={character.id}>
        <span className="mx-3">
          <img
            className="rounded-full"
            src={character.image}
            alt={character.name}
            width="50"
            height="50"
          />
        </span>
        <span>
          <h2 className="text-3xl">{character.name}</h2>
          <p>{character.status}</p>

        </span>
      </div>
    </div>
  );
} 

export const getServerSideProps: GetServerSideProps =  async (
  context: GetServerSidePropsContext
) => {
  const res: any = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character: Character = await res.json();
  console.log(character);

  return {
    props: {
      character: character,
    },
  };
};

export default CharacterPage;
