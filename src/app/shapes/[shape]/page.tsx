import { redirect } from "next/navigation";

interface ShapePageProps {
  params: Promise<{
    shape: string;
  }>;
}

export default async function ShapeDetailsPage({ params }: ShapePageProps) {
  const { shape: shapeId } = await params;
  redirect(`/guide/shape/${shapeId}`);
}
