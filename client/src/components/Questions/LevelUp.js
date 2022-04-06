import React from 'react'
import closeIcon from '../../resources/close_icon.png';
import { useSelector, useDispatch } from 'react-redux'
import { displayPopup } from '../../redux/slices/userSlice';
import sprite1 from '../../resources/level_001/reward_001.gif';
import sprite2 from '../../resources/level_002/reward_002.png';
import sprite3 from '../../resources/level_003/reward_003.png';
import sprite4 from '../../resources/level_004/reward_004.png';
import sprite5 from '../../resources/level_005/reward_005.png';
import sprite6 from '../../resources/level_006/reward_006.png';
import sprite7 from '../../resources/level_007/reward_007.png';
import sprite8 from '../../resources/level_008/reward_008.png';
import sprite9 from '../../resources/level_009/reward_009.png';
import sprite10 from '../../resources/level_010/reward_010.png';
import sprite11 from '../../resources/level_011/reward_011.png';
import sprite12 from '../../resources/level_012/reward_012.png';
import sprite13 from '../../resources/level_013/reward_013.png';
import sprite14 from '../../resources/level_014/reward_014.png';

const LevelUp = ({setter, getter}) => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    
    const sprites = [0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9,sprite10, sprite11, sprite12, sprite13, sprite14];

    const handleClose = () => {
        setter(false)
        dispatch(displayPopup(getter))
    }

  return (
    <section className="levelup">
        <h2 className="levelup__title">Congrats, you've just leveled up!</h2>
        <p className="levelup__description">Here is a gift for you: </p>
        <img className="levelup__img"src={sprites[user.level]} alt='reward'/>
        <p>Your new level: <span>{user.level}</span></p>
        <button className="levelup__close"onClick={handleClose}><img className="btn--close" src={closeIcon} alt='close message'/></button>
    </section>
  )
}

export default LevelUp