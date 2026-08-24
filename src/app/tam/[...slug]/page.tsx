import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PillarTopicPage from "@/components/content/PillarTopicPage";
import {
  getPillarStaticParams,
  getPillarTopic,
} from "@/lib/pillar-topics";

export function generateStaticParams() {
  return getPillarStaticParams("tam");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata {
  const topic = getPillarTopic("tam", params.slug);
  if (!topic) return {};
  return {
    title: `${topic.label} — Tâm | AIMIND`,
    description: topic.description,
  };
}

export default function TamTopicRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  const topic = getPillarTopic("tam", params.slug);
  if (!topic) notFound();

  return <PillarTopicPage topic={topic} />;
}
