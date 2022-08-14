interface media {
    logo:any
    children:any
}

const Media = ({logo,children}:media) => {
    return(
        <div className="flex items-center border-2 border-black rounded-lg py-1 pl-1 pr-3 space-x-1 font-bold bg-gray-200">
        <img src={logo} className="w-10"/>
            {children}
        </div>
    );
}

export default Media