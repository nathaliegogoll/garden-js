const ProgressBar = (props) => {
    const { completed } = props;
    const xpCap = (completed > 3) ?  5 : 3;
    const remains = (completed - ((completed > 5) ?  3 : 0)) % ((completed > 5) ?  5 : 3);
    const fullBar = (remains === 0 && completed !== 0) ? xpCap : remains ;
    const percentageCompleted =  (fullBar * 100) / xpCap;
    const containerStyles = {
      height: 20,
      width: '100px',
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: 50,
      margin: 50,
    }
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
      <div style={containerStyles}>
        {`${fullBar} / ${xpCap} XP`}
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };

  export default ProgressBar