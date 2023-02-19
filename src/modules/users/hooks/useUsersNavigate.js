import {useNavigate} from "react-router-dom";

export const useUsersNavigate = (navigateTo = '/users') => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);
    const navigateToPage = () => navigate(navigateTo);

    return {goBack, goForward, navigateToPage}
}