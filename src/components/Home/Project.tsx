"use client";

import { useEffect, useState, useRef, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/sanity/queries/getProjects";
import { Project } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const id = useId();

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

  useOutsideClick(ref, () => setActiveProject(null));

  return (
    <section className="py-16 sm:py-24 bg-background text-foreground">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary" />
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
            A selection of our best projects crafted for digital success.
          </p>
        </div>

        {loading ? (
          <div className="mt-8 sm:mt-16 text-center text-lg">
            Loading projects...
          </div>
        ) : (
          <div className="mt-8 sm:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                layoutId={`card-${project._id}-${id}`}
                className="cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                  <Image
                    src={
                      project.mainImage
                        ? urlFor(project.mainImage).url()
                        : "/placeholder.jpg"
                    }
                    alt={project.title || "Project Image"}
                    width={600}
                    height={400}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                  <CardHeader className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={ref}
                layoutId={`card-${activeProject._id}-${id}`}
                className="bg-card w-full max-w-[90vw] md:max-w-2xl rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={
                      activeProject.mainImage
                        ? urlFor(activeProject.mainImage).url()
                        : "/placeholder.jpg"
                    }
                    alt={activeProject.title || "Project Image"}
                    width={800}
                    height={500}
                    className="w-full h-48 sm:h-64 md:h-72 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 rounded-full bg-background/50 hover:bg-background/75"
                    onClick={() => setActiveProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {activeProject.title}
                  </h3>
                  <p className="mt-2 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    {activeProject.description}
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {activeProject.projectLink && (
                      <Link
                        href={activeProject.projectLink}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                      >
                        View Project
                      </Link>
                    )}
                    {activeProject.githubLink && (
                      <Link
                        href={activeProject.githubLink}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md bg-secondary px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
                      >
                        GitHub Repo
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 sm:mt-16 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
