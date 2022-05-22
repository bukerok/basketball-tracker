import '../index.scss';

const ZoneTrackerInstruction = () => {
  return (
    <div className="tracker-instruction">
      <ol className="tracker-instruction__list">
        <li className="tracker-instruction__item">Select zone.</li>
        <li className="tracker-instruction__item">Enter number of successful shots in to the Score input.</li>
        <li className="tracker-instruction__item">Enter number of all shots in to the Attempts input.</li>
        <li className="tracker-instruction__item">Click add.</li>
      </ol>
      <p className="tracker-instruction__postscriptum">After you finished your workout, click back arrow in the header panel.</p>
    </div>
  );
};

export default ZoneTrackerInstruction;
