"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getProjects } from "@/sanity/queries/getProjects";
import { Project } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Featured Work
          </h2>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex mb-10"></div>
          </div>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            A selection of our best projects crafted for digital success.
          </p>
        </div>

        {loading ? (
          <div className="mt-12 text-center text-lg">Loading projects...</div>
        ) : projects.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="overflow-hidden transition-transform hover:scale-105"
              >
                <Link href={`/projects/${project.slug?.current}`}>
                  <Image
                    src={
                      project.mainImage
                        ? urlFor(project.mainImage).url()
                        : "/placeholder.jpg"
                    }
                    alt={project.title || "Project Image"}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center text-lg">
            No projects available.
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button size="lg" className="px-6 py-3 text-foreground">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
