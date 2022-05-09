import './index.scss';

const TrackerGridItem = ({
  tracker,
}) => {
  return (
    <div className="tracker-grid-item">
      <p className="tracker-grid-item__name">{tracker.name}</p>
      <div className="tracker-grid-item__tags">
        {
          tracker.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="tracker-grid-item__tag"
              >
                {tag}
              </span>
            );
          })
        }
      </div>
    </div>
  );
};

export default TrackerGridItem;
