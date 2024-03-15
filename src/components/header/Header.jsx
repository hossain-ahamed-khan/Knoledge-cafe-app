import profileImg from '../../assets/profile.png';

const Header = () => {
    return (
        <div className="flex justify-between">
            <h3 className="">Knowledge Cafe</h3>
            <img src={profileImg} alt="" />
        </div>
    );
};

export default Header;