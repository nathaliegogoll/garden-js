const XP = () => {
    const completed = 3;
    const xpCap = (completed > 3) ?  5 : 3;
    const remains = (completed - ((completed > 5) ?  3 : 0)) % ((completed > 5) ?  5 : 3);
    const fullBar = (remains === 0 && completed !== 0) ? xpCap : remains ;
    const percentageCompleted =  (fullBar * 100) / xpCap;

    const fillerStyles = {
      height: '100%',
      width: `${percentageCompleted}%`,
      backgroundColor: "lightgreen",
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
    }

    return (
      <>
      <div className="level__xpbar">
   
        <div style={fillerStyles}>
        <p className="xpbar-label">{`${fullBar} / ${xpCap} XP`}</p>
        </div>
      </div>
      </>
    );
  };

  export default XP