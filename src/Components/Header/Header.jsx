import profile from'../../assets/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between items-center mt-5 px-2 border-b-2'> 
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profile} />
        </div>
    );
};

export default Header;