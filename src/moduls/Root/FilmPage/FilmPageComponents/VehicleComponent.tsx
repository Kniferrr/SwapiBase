const VehicleComponent: React.FC<{ vehicle: string }> = ({ vehicle }) => {
  return (
    <div className="vehicle">
      <a href={vehicle}>{vehicle}</a>
    </div>
  );
};
export default VehicleComponent;
