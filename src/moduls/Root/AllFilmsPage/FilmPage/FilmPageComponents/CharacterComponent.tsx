const CharacterComponent: React.FC<{ character: string }> = ({ character }) => {
  return (
    <div className="character">
      <a href={character}>{character}</a>
    </div>
  );
};
export default CharacterComponent;
