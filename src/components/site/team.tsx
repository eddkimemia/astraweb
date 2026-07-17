"use client";

import { team } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people behind{" "}
              <span className="text-gradient">your peace of mind</span>
            </>
          }
          description="A leadership team blending deep technical expertise with genuine care for client outcomes."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              {/* Avatar block */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/15 via-secondary to-accent/10">
                <div className="bg-grid absolute inset-0 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary text-2xl font-bold text-white shadow-xl ring-4 ring-background transition-transform duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>
                </div>
                {/* Social overlay */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-gradient-to-t from-foreground/80 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25" aria-label={`${member.name} on LinkedIn`}>
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25" aria-label={`Email ${member.name}`}>
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {member.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-secondary px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Backed by a team of <span className="font-semibold text-foreground">40+ certified engineers</span> across our SOC, NOC and field operations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
