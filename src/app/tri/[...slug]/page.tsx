import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PillarTopicPage from "@/components/content/PillarTopicPage";
import {
  getPillarStaticParams,
  getPillarTopic,
} from "@/lib/pillar-topics";

export function generateStaticParams() {
  return getPillarStaticParams("tri");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata {
  const topic = getPillarTopic("tri", params.slug);
  if (!topic) return {};
  return {
    title: `${topic.label} — Trí | AIMIND`,
    description: topic.description,
  };
}

export default function TriTopicRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  const topic = getPillarTopic("tri", params.slug);
  if (!topic) notFound();

  return <PillarTopicPage topic={topic} />;
}
