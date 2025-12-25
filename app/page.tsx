/**
 * MIT License
 * Copyright (c) 2025 DevRhylme
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction.
 */

import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Mission from "@/components/sections/Mission";
import Stats from "@/components/sections/Stats";
import CommunityCTA from "@/components/sections/CommunityCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <FeaturedProjects />
      <Stats />
      <CommunityCTA />
    </>
  );
}