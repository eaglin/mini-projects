import { Filter } from './Filter'
import { ClearCartIcon, CartIcon } from './Icons'
export const Header = () => {
    return (
        <header >



            <Filter />
            <CartIcon />
            <ClearCartIcon />

        </header>
    )
}

export default Header
