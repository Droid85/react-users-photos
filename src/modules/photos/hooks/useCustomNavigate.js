import {useHistory} from "react-router-dom";

export const useCustomNavigate = (navigateTo = '/') => {
    const navigate = useHistory();
    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);
    const navigateToPage = () => navigate(navigateTo);

    return {goBack, goForward, navigateToPage}
}