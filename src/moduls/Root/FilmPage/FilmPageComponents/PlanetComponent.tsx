const PlanetComponent: React.FC<{ planet: string }> = ({ planet }) => {
  return (
    <div className="planet">
      <a href={planet}>{planet}</a>
    </div>
  );
};
export default PlanetComponent;
