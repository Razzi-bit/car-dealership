const SubscribeFrom = () => {
  return (
    <div className="mt-12">
      <form className="flex gap-4 flex-col sm:flex-row sm:flex-wrap">
        <input
          type="text"
          name="newsletter"
          id="newsletter"
          className="border border-white py-4 px-5 text-white bg-transparent placeholder-white outline-none sm:max-w-[300px]"
          placeholder="Your email adress"
        />
        <p className="text-base bg-Cred text-white py-4 px-5 sm:max-w-[150px]">Subscribe</p>
      </form>
    </div>
  );
};

export default SubscribeFrom;
