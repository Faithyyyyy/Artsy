function ByArtist({ drop }) {
  return (
    <div className={`flex gap-5 flex-col mt-6 ${drop}`} id="3">
      <h6 className="font-satoshi underline text-2xl font-normal mt-9">All</h6>
      <p className="font-satoshi text-xl">Below $100.00</p>
      <p className="font-satoshi text-xl">$100.00 - $150.00</p>
      <p className="font-satoshi text-xl">$150.00 - $200.00</p>
      <p className="font-satoshi text-xl">Above $200.00</p>
    </div>
  );
}

export default ByArtist;
