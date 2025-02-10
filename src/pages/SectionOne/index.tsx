import { SectionOneComponent } from "../../components/section-one";

export const SectionOne = () => {
  return (
    <>
      <div className="w-full h-[650px] mt-5 md:h-[295px] md:w-[100%] lg:w-[930px] flex flex-col md:flex-row justify-between">
        <SectionOneComponent />
      </div>
    </>
  );
};
