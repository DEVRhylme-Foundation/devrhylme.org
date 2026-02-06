import { Metadata } from "next";
import Link from "next/link";
import { 
  Github, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Code, 
  Heart,
  GitPullRequest,
  Bug,
  Lightbulb,
  Award,
  Shield,
  MessagesSquare,
  Sparkles
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SOCIAL_LINKS, COMMUNITY_GUIDELINES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Community - DevRhylme Foundation",
  description: "Join the DevRhylme community and start contributing to open source projects.",
};

const contributionWays = [
  {
    icon: Code,
    title: "Code Contributions",
    description: "Submit pull requests, fix bugs, or add new features to our projects.",
    link: "/projects",
  },
  {
    icon: Bug,
    title: "Report Issues",
    description: "Found a bug? Report it on GitHub and help us improve our projects.",
    link: SOCIAL_LINKS.github,
  },
  {
    icon: BookOpen,
    title: "Improve Documentation",
    description: "Help us make our docs better by fixing errors or adding examples.",
    link: "/docs",
  },
  {
    icon: Lightbulb,
    title: "Share Ideas",
    description: "Suggest new features or improvements through our discussion forums.",
    link: SOCIAL_LINKS.githubDiscussions,
  },
  {
    icon: MessageCircle,
    title: "Help Others",
    description: "Answer questions and help fellow developers in our community.",
    link: SOCIAL_LINKS.discord,
  },
  {
    icon: Award,
    title: "Organize Events",
    description: "Host meetups, workshops, or contribute to our events.",
    link: "/events",
  },
];

const communityChannels = [
  {
    name: "GitHub",
    icon: Github,
    description: "Contribute to our projects, report issues, and join discussions.",
    link: SOCIAL_LINKS.github,
    color: "bg-gray-900 hover:bg-gray-800",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    description: "Chat with the community in real-time and get help.",
    link: SOCIAL_LINKS.discord,
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    name: "Twitter",
    icon: Users,
    description: "Follow us for updates, news, and community highlights.",
    link: SOCIAL_LINKS.twitter,
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

const contributionGuidelines = [
  {
    step: "1",
    title: "Find a Project",
    description: "Browse our projects and find one that interests you. Look for issues labeled 'good first issue' or 'help wanted'.",
  },
  {
    step: "2",
    title: "Fork & Clone",
    description: "Fork the repository to your GitHub account and clone it to your local machine.",
  },
  {
    step: "3",
    title: "Create a Branch",
    description: "Create a new branch for your changes. Use a descriptive name like 'fix-login-bug' or 'add-dark-mode'.",
  },
  {
    step: "4",
    title: "Make Changes",
    description: "Write your code, following our coding standards and best practices. Don't forget to add tests!",
  },
  {
    step: "5",
    title: "Commit & Push",
    description: "Commit your changes with a clear message and push to your forked repository.",
  },
  {
    step: "6",
    title: "Create Pull Request",
    description: "Open a pull request to the main repository. Describe your changes and link any related issues.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be part of a vibrant community of developers, designers, and open-source 
              enthusiasts. Together, we&apos;re building the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={SOCIAL_LINKS.github}>
                <Button size="lg">
                  <Github className="mr-2" size={20} />
                  Start Contributing
                </Button>
              </Link>
              <Link href="#community-channels">
                <Button size="lg" variant="outline">
                  Join Discussions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Contribute
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to contribute to DevRhylme Foundation, 
              regardless of your skill level or experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionWays.map((way) => {
              const Icon = way.icon;
              return (
                <Card key={way.title} hover className="p-6">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {way.description}
                  </p>
                  <a
                    href={way.link}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center"
                    target={way.link.startsWith("http") ? "_blank" : undefined}
                    rel={way.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    Learn more →
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Discussions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                <MessagesSquare size={16} className="mr-2" />
                Community Forums
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join the Discussion on GitHub
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our GitHub Discussions is the place to ask questions, share ideas, and connect with other community members. It&apos;s our central hub for all non-code conversations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                    <Lightbulb size={16} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Share Ideas</h3>
                    <p className="text-gray-600">Propose new features and improvements for our projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1">
                    <MessageCircle size={16} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Q&A and Help</h3>
                    <p className="text-gray-600">Get help with installation, usage, or development issues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mt-1">
                    <Sparkles size={16} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Show & Tell</h3>
                    <p className="text-gray-600">Show off what you&apos;ve built with DevRhylme tools.</p>
                  </div>
                </div>
              </div>

              <a 
                href={SOCIAL_LINKS.githubDiscussions}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                  <Github className="mr-2" size={20} />
                  Go to Discussions
                </Button>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
              <Card className="relative p-8 border-gray-200 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="flex-1">
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">question</span>
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">help wanted</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
            <Shield size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Community Guidelines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, or similar personal characteristic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMMUNITY_GUIDELINES.codeOfConduct} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2" size={20} />
                Read Code of Conduct
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contribution Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Contribute
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these steps to make your first contribution to our projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {contributionGuidelines.map((guideline, index) => (
              <div key={guideline.step} className="relative">
                {/* Connector Line */}
                {index !== contributionGuidelines.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-primary-200"></div>
                )}

                <div className="flex gap-6 mb-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {guideline.step}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600">
                      {guideline.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/docs">
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2" size={20} />
                Read Full Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section id="community-channels" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community channels to stay updated and connect with fellow developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {communityChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card hover className="p-6 text-center h-full">
                    <div className={`w-16 h-16 ${channel.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {channel.description}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Value Our Contributors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Every contribution, big or small, is appreciated and recognized. 
            Contributors get featured on our website, special badges, and exclusive swag!
          </p>
          <Link href="/team">
            <Button size="lg">
              <Award className="mr-2" size={20} />
              Meet Our Contributors
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are contributing to open source and 
            building amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <Github className="mr-2" size={20} />
                View Projects on GitHub
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}