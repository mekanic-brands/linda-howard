import Image from 'next/image'

const SearchBox = (props) => {
  return (
    <div className="px-[24px] py-[18px] bg-darkBlue60/80 mb-[24px] flex items-center gap-[12px] rounded-[8px] border-[2px] border-darkBlue50">
      <button type="submit">
        <Image
          src="/icons/search-icon.svg"
          width={22}
          height={22}
          alt="search"
        />
      </button>
      <input
        className="text-white outline-none bg-transparent text-h4 font-semibold w-full"
        autoComplete="off"
        {...props}
      />
    </div>
  )
}

export default SearchBox
