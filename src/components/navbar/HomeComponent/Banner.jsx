
const Banner = () => {
    return (
        <div>
            <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url("https://i.ibb.co/jH5N8Pc/parcel.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          borderRadius: "10px"
        }}
      >
        <div className="hero-overlay rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md space-y-5 backdrop-blur-md p-4 rounded-lg bg-transparent">
            <h1 className="uppercase text-2xl font-bold text-center ">---We are ready to serve you---</h1>
          <div className="input-group flex justify-center items-center text-center">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered text-black text-xl"
          // value ={search}
          // onChange={(e)=>setSearch(e && e.target.value)}
        />
        <button className="hover:bg-[#6263bb] btn-square text-white w-[110px] bg-[#585ad3]"
        // onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;