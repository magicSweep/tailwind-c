const Shimmer = ({ children }: any) => {
  return (
    <div className="animate-pulse flex flex-wrap justify-center w-96">
      <div className="h-10 w-24 mr-2 mb-2 bg-red-400 rounded-full"></div>
      <div className="h-10 w-24 mr-2 mb-2 bg-red-400 rounded-full"></div>
      <div className="h-10 w-24 mr-2 mb-2 bg-blue-400 rounded-full"></div>
      <div className="h-10 w-24 mr-2 mb-2 bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default {
  component: Shimmer,
  title: "Progress/Shimmer",
  decorators: [
    (story: any) => (
      <div
        style={{
          width: "300px",
          margin: "auto",
          paddingTop: "30px",
          backgroundColor: "white",
        }}
      >
        {story()}
      </div>
    ),
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Shimmer />;
};

/* (Default as any).args = {
  variant: "rect",
}; */
