import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { ProjectCard } from './components/ProjectCard';
import { SocialCard } from './components/SocialCard';
// import { SkillCard } from './components/SkillCard';

function App() {
    return (
	    <div className="min-h-screen flex flex-col bg-steam-bg">
            <Navbar />

            <ProfileCard />

            {/* Main Content */}
            <main className="max-w-5xl w-full mx-auto px-4 py-8 flex gap-8">

                {/* Left Column */}
                <div className="w-2/3">
                    <div className="bg-steam-panel/50 border border-steam-text/30 shadow-lg">

                        {/* Card Header */}
                        <div className="bg-steam-panel px-4 py-2 flex justify-between items-center border-b border-steam-text/30">
                            <h2 className="text-steam-text font-medium text-sm">Recent Projects</h2>
                        </div>

                        {/* Content Body */}
                        <div className="p-4 flex flex-col gap-2">
                            <ProjectCard
                                image="/github-logo-black.png"
                                title="NU Handbook Chatbot"
                                link="https://github.com/Mk-Merc/NU-Handbook-Chatbot"
                                description="An Android app for NU Laguna students that uses a local AI model to answer questions directly from the student handbook."
                                tech={['TypeScript', 'React Native', 'Ollama']}
                            />

                            <ProjectCard
                                title="Stranger Chat App"
                                image="/github-logo-black.png"
                                link="https://github.com/Mk-Merc/Stranger-Chat"
                                description="An Android app that connects users with random strangers for anonymous real-time text conversations."
                                tech={['TypeScript', 'React Native', 'MongoDB', 'Socket.io']}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="bg-steam-panel/50 border border-steam-text/30 shadow-lg">

						{/* Card Header */}
                        <div className="bg-steam-panel px-4 py-2 flex justify-between items-center border-b border-steam-text/30">
                            <h2 className="text-steam-text font-medium text-sm">Socials</h2>
                        </div>

                        {/* Content Body */}
                        <div className="p-4 grid grid-cols-3 gap-2">
                            <SocialCard
                                name="LinkedIn"
                                username="mkmercado"
                                icon="/linkedin-logo-blue.png"
                                action="Connect"
                                url="https://www.linkedin.com/in/marion-kenji-mercado-3322a2445/"
                            />

                            <SocialCard
                                name="GitHub"
                                username="Mk-Merc"
                                icon="/github-logo-white.png"
                                action="Follow"
                                url="https://github.com/Mk-Merc"
                            />
                        </div>
                    </div>

                    {/* Will not be used for now. Don't forget to bring back the header and body comments
                    <div className="bg-steam-panel/50 border border-steam-text/30 shadow-lg">

                        
                        <div className="bg-steam-panel px-4 py-2 flex justify-between items-center border-b border-steam-text/30">
                            <h2 className="text-steam-text font-medium text-sm">Skills</h2>
                        </div>

                        
                        <div className="p-4 flex flex-wrap gap-2">
                            <SkillCard name="React" />
                            <SkillCard name="Node.js" />
                            <SkillCard name="TypeScript" />
                        </div>
                    </div>
                    */}
                </div>
            </main>
        </div>
    );
}

export default App;