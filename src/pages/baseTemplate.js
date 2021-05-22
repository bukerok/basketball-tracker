import './baseTemplate.scss';

export default function BaseTemplate({
  children,
}) {
  return (
    <div className="base-template">
      {children}
    </div>
  );
};
