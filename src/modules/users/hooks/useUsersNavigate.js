import {useHistory} from "react-router-dom";

export const useUsersNavigate = (navigateTo = '/users') => {
    const navigate = useHistory();
    const goBack = () => navigate.push('/users');
    const goForward = () => navigate(1);
    const navigateToPage = () => navigate.push(navigateTo);

    return {goBack, goForward, navigateToPage}
}
