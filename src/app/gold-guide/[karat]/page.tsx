import { redirect } from "next/navigation";

interface GoldKaratProps {
  params: Promise<{
    karat: string;
  }>;
}

export default async function GoldKaratRedirectPage({
  params,
}: GoldKaratProps) {
  const { karat } = await params;
  redirect(`/guide/gold/${karat}`);
}
