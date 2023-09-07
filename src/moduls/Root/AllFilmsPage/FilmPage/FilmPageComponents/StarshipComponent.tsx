const StarshipComponent: React.FC<{ starship: string }> = ({ starship }) => {
  return (
    <div className="starship">
      <a href={starship}>{starship}</a>
    </div>
  );
};
export default StarshipComponent;
