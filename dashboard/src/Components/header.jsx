import { Search, Bell, User } from "lucide-react";

function Header() {
    return (
        <header className="w-full bg-black text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg w-96 border border-gray-700">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
                />
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer hover:opacity-80">
                    <Bell className="h-6 w-6 text-gray-300" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-yellow-400 rounded-full"></span>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-sm">botify login</span>
                </div>
            </div>
        </header>
    )
}

export default Header