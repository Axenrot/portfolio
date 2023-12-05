const Popup = () => {
  return (
    <div className="flex flex-col gap-3 left-1/2 -translate-x-1/2 p-12 w-[80vw] fixed h-fit bg-black/80 z-10 rounded-xl bottom-[3vh]">
      <h1 className="text-xl font-semibold">Title</h1>
      <p className="text-lg font-thin">
        Placeholder Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illum expedita tempore natus id deleniti doloremque eligendi, beatae
        quasi placeat voluptate est quaerat? Vel obcaecati pariatur sit repellat
        vitae, quae at!
      </p>
    </div>
  );
};

export default Popup;
