import reactLogo from "../../assets/react.svg";
export const Header = () => {
  return (
    <div className="w-full  flex items-center mb-20">
      <div>
        <img src={reactLogo} width={50} height={50} />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <h1 className="text-4xl font-bold text-left"> TodoList</h1>
        <code>Eliminez le chaos, suivez le flux.</code>
      </div>
    </div>
  );
};

export default Header;
