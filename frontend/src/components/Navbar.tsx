export const Navbar = () => {
    return (
        <nav className="bg-steam-dark w-full border-b border-steam-panel">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-steam-panel">
                        <img
                            src="/github-logo-white.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8 text-sm font-semibold tracking-wider text-steam-text">
                        <a href="https://github.com/Mk-Merc?tab=repositories" className="hover:text-white text-white">View All Projects</a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Profile Picture */}
                    <div className="w-8 h-8 bg-steam-panel border-2 border-steam-blue">
                        <img
                            src="/profile.png"
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-steam-text font-semibold text-sm">Marion Kenji</span>
                </div>
            </div>
        </nav>
    );
};
