import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Character, GetCharacterResults } from "../../types/type";

const OnePage: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <>
      <ul className="center">
        {characters.map((character) => (
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
              <Link href={`/characters/${character.id}`}>
                <a >
                  <h2 className="text-3xl">{character.name}</h2>
                </a>
              </Link>
              <p>{character.status}</p>
            </span>
          </div>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res: any = await fetch("https://rickandmortyapi.com/api/character");
  const json: GetCharacterResults = await res.json();
  console.log(json);

  return {
    props: {
      characters: json.results,
    },
  };
};

export default OnePage;
