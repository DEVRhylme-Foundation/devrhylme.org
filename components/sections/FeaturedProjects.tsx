"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui//Button";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: "1",
    title: "DevRhylme Website",
    description: "The official DevRhylme Foundation website built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    stars: 1,
    forks: 4,
    githubUrl: "https://github.com/DEVRhylme-Foundation/devrhylme.org",
  },
  {
    id: "4",
    title: "SAMURAI",
    description: "Adapting Segment Anything Model for Zero-Shot Visual Tracking with Motion-Aware Memory.",
    tags: ["Python", "Computer Vision", "AI"],
    stars: 8,
    forks: 12,
    githubUrl: "https://github.com/DEVRhylme-Foundation/samurai",
  },
  {
    id: "6",
    title: "ForgeX",
    description: "Quickly spin up Go projects using popular frameworks with an intuitive CLI tool.",
    tags: ["Go", "CLI", "Developer Tools"],
    stars: 8,
    forks: 15,
    githubUrl: "https://github.com/DEVRhylme-Foundation/ForgeX",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular open-source projects that are making an impact in the developer community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>

                <p className="text-gray-600 mb-4 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork size={16} className="mr-1" />
                      {project.forks}
                    </span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                  >
                    View
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}