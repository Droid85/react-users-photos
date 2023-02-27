import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('!!!Required!!!').max(20).min(3).label('User Name'),
});
