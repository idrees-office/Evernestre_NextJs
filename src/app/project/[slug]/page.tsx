interface ProjectDetailParams {
  params: {
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
