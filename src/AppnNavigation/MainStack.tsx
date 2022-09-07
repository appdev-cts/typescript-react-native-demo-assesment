
import { Stack } from './RegisterScreen';
import { AppRoute } from './ScreenName';
import Home from '../Screens/Home';
import More from '../Screens/More';
import { BottomTabs } from '../Config/NavigationComponent';
import MyModal from '../Screens/MyModal';
import AddData from '../Screens/AddData';
/**
 * navigation main stack
 */
export default function MainStack():any {
    Stack(AppRoute.Home, Home);
    Stack(AppRoute.More, More);
    Stack(AppRoute.Modal, MyModal)
    Stack(AppRoute.Add, AddData)
    BottomTabs()
}




