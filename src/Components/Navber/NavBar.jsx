const NavBar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="https://i.ibb.co/PzzM6VyJ/youtube-logo-hd-8.png" alt="YouTube Logo" className="w-12 h-auto" />
        <p className="text-xl font-bold text-black hidden sm:inline">YouTube</p>
      </div>

      {/* Middle: Search bar */}
      <div className="flex flex-1 justify-center items-center max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="lg:w-full px-4 py-1 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-400"
        />
        <button className=" h-full bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
          <img
            src="https://img.icons8.com/ios-filled/24/search--v1.png"
            alt="search"
            className="px-4 py-[6px] "
          />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex justify-center items-center gap-3">
        <div className="flex items-center gap-0 bg-gray-200 px-3 rounded-2xl text-sm">
          <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=11153&format=png&color=000000" alt="" />
          <span className="hover:text-black">Create</span>
        </div>
        <div className="flex items-center gap-0 text-gray-600 text-sm">
          <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=11642&format=png&color=000000" alt="" />
        </div>
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-2xl text-white">
          R
        </div>
      </div>
    </header>

  );
};

export default NavBar;