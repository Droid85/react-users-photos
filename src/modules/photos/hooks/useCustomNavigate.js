import {useHistory} from "react-router-dom";

export const useCustomNavigate = (navigateTo = '/') => {
    const navigate = useHistory();
    const navigateToPage = () => navigate.push(navigateTo);

    return {navigateToPage}
}