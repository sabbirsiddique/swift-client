import CountUp from 'react-countup';
const Stat = () => {
  return (
    <div className="text-center">
      <h1 className="italic text-3xl uppercase text-center relative">
        <strong>stat</strong>
      </h1>
      <hr className="mt-2 mb-5 w-10 mx-auto border-b-2 border-[#FDC300]" />
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Parcel</div>
          <div className="stat-value">
            <CountUp
                end={31000}
                duration={5}
            ></CountUp>
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Parcel Delivery</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Registered Users</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
