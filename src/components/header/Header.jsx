import Profile from  '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl  fon-bold'>Knowledg Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;