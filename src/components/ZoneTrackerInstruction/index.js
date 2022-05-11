import './index.scss';

const ZoneTrackerInstruction = () => {
  return (
    <div className="zone-tracker-instruction">
      <ol className="zone-tracker-instruction__list">
        <li className="zone-tracker-instruction__item">Select zone.</li>
        <li className="zone-tracker-instruction__item">Enter number of successful shots in to the Score input.</li>
        <li className="zone-tracker-instruction__item">Enter number of all shots in to the Attempts input.</li>
        <li className="zone-tracker-instruction__item">Click add.</li>
      </ol>
      <p className="zone-tracker-instruction__postscriptum">After you finished your workout, click back arrow in the header panel.</p>
    </div>
  );
};

export default ZoneTrackerInstruction;
