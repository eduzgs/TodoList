import  './User.css'
import avatar from "./user-avatar.png"
export function User(){
    return(
        <div className='user-container'>
            <div className='user-info'>
                <img className = 'user-img' src= {avatar} alt= 'user avatar' />
                <div className='state'></div>
            </div>
            <img className='plus' src="https://iconsplace.com/wp-content/uploads/_icons/5d0ca3/256/png/plus-2-icon-13-256.png" alt="https://iconsplace.com/wp-content/uploads/_icons/5d0ca3/256/png/plus-2-icon-13-256.png" ></img>
        </div>

    );

}