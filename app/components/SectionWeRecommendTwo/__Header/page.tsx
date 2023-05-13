import __Link from "./__Link/page";

const __Header = () => {
  const links = [
    { name: "Crossovers & SUVs", active: true },
    { name: "Cars", active: false },
    { name: "Electric", active: false },
    { name: "Sports Cars", active: false },
  ];
  return (
    <ul className="pb-[50px] flex flex-row flex-wrap gap-2">
      {links.map(({ name, active }, index) => {
        return <__Link key={index} name={name} active={active} />;
      })}
    </ul>
  );
};

export default __Header;
