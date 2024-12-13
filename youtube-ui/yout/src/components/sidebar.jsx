export  function Sidebar() {
    return (
      <aside className="w-55 h-screen bg-gray-900 text-gray-200">
        {/* Logo Section */}
        <div className="p-4 text-xl font-bold text-red-500">
          YouTube
        </div>
  
        {/* Navigation Links */}
        <nav className="mt-4">
          <ul>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">🏠</span>
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">📺</span>
              <span>Subscriptions</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">📚</span>
              <span>Library</span>
            </li>
          </ul>
        </nav>
  
        {/* Divider */}
        <hr className="border-gray-700 my-4" />
  
        {/* Trending & Other Sections */}
        <nav>
          <ul>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">🔥</span>
              <span>Trending</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">⏰</span>
              <span>Watch Later</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">👍</span>
              <span>Liked Videos</span>
            </li>
          </ul>
        </nav>
  
        {/* Divider */}
        <hr className="border-gray-700 my-4" />
  
        {/* Categories */}
        <nav>
          <ul>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">🎵</span>
              <span>Music</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">🎮</span>
              <span>Gaming</span>
            </li>
            <li className="flex items-center space-x-4 p-2 hover:bg-gray-700 cursor-pointer">
              <span className="text-2xl">📖</span>
              <span>Education</span>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  