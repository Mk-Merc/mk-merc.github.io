export const ProfileCard = () => {
    return (
        <div className="w-full bg-steam-bg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-steam-panel border-b border-steam-panel py-6 flex items-center gap-8">

                    {/* Profile Picture */}
                    <div className="w-48 h-48 bg-steam-panel border-4 border-steam-blue flex-shrink-0">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-3xl text-steam-text font-light mb-2">
                            Marion Kenji Mercado
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-steam-text mb-4">
                            <span className="w-2 h-2 rounded-full bg-steam-blue"></span>
                            <span>Online</span>
                            <span className="mx-2">•</span>
                            <span>Lucban, Quezon, Philippines</span>
                        </div>

                        <p className="text-steam-text text-sm leading-relaxed mb-4">
                            A fourth-year college student at National University Laguna, currently pursuing a degree in Computer Science.
                        </p>

                        <div>
                            <div className="inline-block bg-steam-panel px-3 py-1 text-xs text-steam-blue border border-steam-blue/30">
                                College Student
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
