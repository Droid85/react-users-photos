import {useHistory} from "react-router-dom";

export const useUsersNavigate = (navigateTo = '/users') => {
    const navigate = useHistory();
    const navigateToPage = () => navigate.push(navigateTo);

    return {navigateToPage}
}
