interface link {
  name: string;
  active: boolean;
}

const __Link = ({ name, active }: link) => {
  return (
    <li
      className={`text-base px-5 py-2 cursor-pointer border-b  mr-2 ${
        active ? "border-dark" : "border-Cgray/50"
      }`}
    >
      {name}
    </li>
  );
};

export default __Link;
