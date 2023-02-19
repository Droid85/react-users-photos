import {useNavigate} from "react-router-dom";

export const useCustomNavigate = (navigateTo = '/') => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);
    const navigateToPage = () => navigate(navigateTo);

    return {goBack, goForward, navigateToPage}
}
