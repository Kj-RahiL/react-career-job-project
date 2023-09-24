
const List = ({list}) => {

    const {availability,logo, category_name} = list

    // console.log(list)
    return (
        <div className=" bg-gray-100 relative  rounded-xl  bg-clip-border text-gray-700 shadow-md p-8 mx-auto "> 
            <div className="relative mx-4 mt-4  overflow-hidden rounded-xl ">
                <img src={logo} className="object-cover"/>
            </div>
           <div>
             <h2>{category_name}</h2>
             <p>{availability}</p>
           </div>
        </div>
    );
};

export default List;