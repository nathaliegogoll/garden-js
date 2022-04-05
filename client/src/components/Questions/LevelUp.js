import React from 'react'
import closeIcon from '../../resources/close_icon.png';
import { useSelector, useDispatch } from 'react-redux'
import { displayPopup } from '../../redux/slices/userSlice';
import sprite1 from '../../resources/level_001/background.gif';
import sprite2 from '../../resources/level_002/pumpkin.png';
import sprite3 from '../../resources/level_003/carrot.png';
import sprite4 from '../../resources/level_004/corn.png';
import sprite5 from '../../resources/level_005/cabbage.png';
import sprite6 from '../../resources/level_006/tomat.png';
import sprite7 from '../../resources/level_007/watermelon.png';
import sprite8 from '../../resources/level_008/oaktree.png';
import sprite9 from '../../resources/level_009/birchtree.png';
import sprite10 from '../../resources/level_010/pigeon.png';
import sprite11 from '../../resources/level_011/seagull.png';
import sprite12 from '../../resources/level_012/mouse.png';
import sprite13 from '../../resources/level_013/plants.png';
import sprite14 from '../../resources/level_014/house.png';

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
        <img className="levelup__img"src={sprites[user.level]} alt='carrot'/>
        <p>Your new level: <span>{user.level}</span></p>
        <button className="levelup__close"onClick={handleClose}><img className="btn--close" src={closeIcon} alt='close message'/></button>
    </section>
  )
}

export default LevelUp