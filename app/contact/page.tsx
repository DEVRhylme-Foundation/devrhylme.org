import { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Github, Twitter, Linkedin, Youtube } from "lucide-react";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - DevRhylme Foundation",
  description: "Get in touch with DevRhylme Foundation. We'd love to hear from you!",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "admin@devrhylme.org",
    link: "mailto:admin@devrhylme.org",
  },
  {
    icon: MessageCircle,
    title: "Discord",
    details: "Join our Discord community",
    link: "https://discord.com/invite/xjwZzGKDVR",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Global - Remote First",
    link: null,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/DEVRhylme-Foundation",
    icon: Github,
    ariaLabel: "Visit our GitHub profile",
    color: "bg-gray-900 hover:bg-gray-800",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/DevRhylme1",
    icon: Twitter,
    ariaLabel: "Follow us on Twitter/X",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/devrhylme1",
    icon: Linkedin,
    ariaLabel: "Connect with us on LinkedIn",
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@devrhylme",
    icon: Youtube,
    ariaLabel: "Subscribe to our YouTube channel",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/xjwZzGKDVR",
    icon: MessageCircle,
    ariaLabel: "Join our Discord community",
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. 
                We&apos;re here to help!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <Card className="p-4 flex items-start hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={24} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{info.details}</p>
                      </div>
                    </Card>
                  );

                  return info.link ? (
                    <a 
                      key={info.title} 
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest projects, events, and community news.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="group"
                >
                  <Card hover className="p-6 text-center h-full">
                    <div className={`w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {social.name}
                    </span>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}