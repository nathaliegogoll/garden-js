const XP = () => {
    const completed = 3;
    const xpCap = (completed > 3) ?  5 : 3;
    const remains = (completed - ((completed > 5) ?  3 : 0)) % ((completed > 5) ?  5 : 3);
    const fullBar = (remains === 0 && completed !== 0) ? xpCap : remains ;
    const percentageCompleted =  (fullBar * 100) / xpCap;

    const fillerStyles = {
      height: '100%',
      marginTop: '-1.2rem',
      width: `${percentageCompleted}%`,
      backgroundColor: "lightgreen",
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
    }
    const labelStyles = {
      paddingLeft: "1rem",
      color: 'black'
    }
    return (
      <div className="level__xpbar">
        {`${fullBar} / ${xpCap} XP`}
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };

  export default XP