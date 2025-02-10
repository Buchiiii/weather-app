import { ContainerOne } from "./container-one";
import { ContainerThree } from "./container-three";
import { ContainerTwo } from "./container-two";

export const SectionOneComponent = () => {
  return (
    <>
      <div className="h-[250px] shadow-lg rounded-[16px] md:w-[450px] lg:w-[450px] md:h-full bg-gradient-to-l from-[rgba(2,110,189,0.408)] to-[rgba(23,38,92,0.6)]">
        <ContainerOne />
      </div>
      <div className="md:w-[214px] md:ms-3 h-[180px] shadow-lg rounded-[16px] md:h-full bg-gradient-to-l from-[rgba(2,110,189,0.408)] to-[rgba(23,38,92,0.6)]">
        <ContainerTwo />
      </div>
      <div className="md:w-[214px] md:ms-3 h-[180px] shadow-lg rounded-[16px] md:h-full  bg-gradient-to-l from-[rgba(2,110,189,0.408)] to-[rgba(23,38,92,0.6)]">
        <ContainerThree />
      </div>
    </>
  );
};
