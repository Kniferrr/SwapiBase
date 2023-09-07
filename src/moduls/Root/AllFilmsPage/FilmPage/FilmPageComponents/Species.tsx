const SpeciesComponent: React.FC<{ species: string }> = ({ species }) => {
  return (
    <div className="species">
      <a href={species}>{species}</a>
    </div>
  );
};
export default SpeciesComponent;
