import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">関連</p>
        <p className="link">ストア</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">画像</p>
        <User/>
      </div>
    </header>
  );
};

export default Header;
