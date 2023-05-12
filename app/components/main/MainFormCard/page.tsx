import FormSelect from "./FormSelect/page";

const MainFormCard = () => {
  return (
    <div className="hidden lg:flex flex-col border border-white/50 max-w-[470px] w-full h-full text-white p-7 text-left rounded-sm">
      <h2 className="mb-6 text-4xl">Find Your Ride</h2>
      <form className="w-full">
        <FormSelect name="brand" />
        <FormSelect name="model" />
        <FormSelect name="type" />
        <div className="pt-4 cursor-pointer">
          <p className="px-5 py-4 bg-Cred text-white tegt-xl text-center">Get Started</p>
        </div>
      </form>
    </div>
  );
};

export default MainFormCard;
