interface ProjectDetailParams {
  params: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slug: any;
  };
}

export default async function ProjectDetail({ params }: ProjectDetailParams) {
  const { slug } = params;

  return (
    <div className="container mx-auto pt-24">
      <h1>Project Details: {slug}</h1>
    </div>
  );
}
