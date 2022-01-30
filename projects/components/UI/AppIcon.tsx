type Props = {
  title: string;
  icon: JSX.Element;
  size?: number;
};

const AppIcon = (props: Props) => {
  const Icon = props.icon;
  return (
    <div>
      <span className="not-sr-only">{Icon}</span>
      <span className="sr-only">{props.title}</span>
    </div>
  );
};

export default AppIcon;
