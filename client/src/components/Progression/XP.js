import { useSelector } from "react-redux";

const XP = () => {
    const { user, levelup } = useSelector((state) => state.user);
    const completed = user.xp;
      
    const remains = (completed - ((completed > 3) ?  3 : 0)) % 3;
    let fullBar = (remains === 0 && completed !== 0) ? 3 : remains ;
    if (user.xp > 0 && user.xp % 3 === 0 && levelup === true) {
      fullBar = 0;      
    }
    const percentageCompleted = (fullBar * 100) / 3;
    const fillerStyles = {
      height: '100%',
      width: `${percentageCompleted}%`,
      backgroundColor: "#bdffb0",
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
    }

    return (
      <>
      <div className="level__xpbar">
   
        <div style={fillerStyles}>
        </div>
        <p className="xpbar-label">{`${fullBar} / 3 XP`}</p>
      </div>
      </>
    );
  };

  export default XP