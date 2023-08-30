export const metadata = {
  title: "IPAYYGD | Projects Archive",
};

type ProjectLayoutType = {
  children: React.ReactNode;
};
const ProjectLayout = (props: ProjectLayoutType) => {
  const { children } = props;
  return (
    <main className="w-full min-h-screen flex justify-center bg-[#111111] text-[#a1a0a0]">
      <div className="w-full max-w-2xl">{children}</div>
    </main>
  );
};

export default ProjectLayout;
