import { Link } from "react-router-dom";
export const PageList = () => {
    return (
        <div className="font-Montserrat font-semibold text-sm text-[#252422]">
            <ul className="flex">
                <Link to={"/category/vinilo"}>
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Vinilos</li>
                    </div>
                </Link>
                <Link to={"/category/cards"}>
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Cards</li>
                    </div>
                </Link>
                <Link to={"/category/board"}>
                    <div className="relative">
                        <li className="p-4 after:absolute after:content-[''] after:bg-black after:w-[100%] after:h-[2px] after:left-0 after:rounded-xl after:duration-300 after:-bottom-[2px] after:scale-x-0 after:origin-center after:hover:scale-x-90">Boards</li>
                    </div>
                </Link>
            </ul>
        </div>
    );
}

