import AuthUser from '../Authentication/AuthUser';
//port AdminNav from './admin';
import GuestNav from './guest';
import UserNav from './user';

export default function Navigation() {
    if (AuthUser().user.role === 'user') { //AuthUser().user.role == 'admin'
        return <UserNav />// later after creating admin add  navigation for admin return <AdminNav />
    }
    else if (AuthUser().user.role === 'user') {
        return <UserNav />
    }
    else
    {
        return <GuestNav />
    }
}
