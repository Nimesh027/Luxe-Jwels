import { redirect } from "next/navigation";

interface SilverTypeProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function SilverTypeRedirectPage({
  params,
}: SilverTypeProps) {
  const { type } = await params;
  redirect(`/guide/silver/${type}`);
}
